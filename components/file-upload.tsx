import React, { useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { useController, UseControllerProps } from "react-hook-form";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for handling class names
import { FilePlus, FilePlus2 } from "lucide-react";

interface FileUploadProps extends UseControllerProps {
  label?: string;
  description?: string;
  className?: string;
  accept?: Accept;
  multiple?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  description,
  className,
  accept,
  multiple,
  ...props
}) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController(props);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      multiple ? onChange(acceptedFiles) : onChange(acceptedFiles[0]);
    },
    [onChange, multiple],
  );

  const { fileRejections, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: accept,
      maxFiles: multiple ? undefined : 1,
    });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <>
      {errors.map((e) => (
        <li key={e.code}>
          {file.name}: {e.message}
        </li>
      ))}
    </>
  ));

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-center text-sm placeholder:text-neutral-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-slate-950 dark:placeholder:text-neutral-400",
        className,
      )}
    >
      {label && <label className="file-upload-label">{label}</label>}
      <div
        {...getRootProps()}
        className={cn(
          "flex h-64 w-full flex-col items-center justify-center gap-2 rounded-md focus-visible:z-20 focus-visible:outline  focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-sky-400",
          isDragActive ? "border-2 border-sky-400" : "border border-dashed",
        )}
      >
        <input {...getInputProps()} onBlur={onBlur} />
        {isDragActive ? (
          <>
            <FilePlus2 size={52} strokeWidth={1.25} />
            Laat bestand los om toe te voegen
          </>
        ) : (
          <>
            <FilePlus size={52} strokeWidth={1.25} />
            Klik hier of sleep een bestand
          </>
        )}
      </div>
      {description && <p className="text-slate-700">{description}</p>}
      {value && <p>{value.name}</p>}
      {error && <p className="mt-2 text-red-600">{error.message}</p>}
      {fileRejectionItems.length > 0 && (
        <div className="mt-2">
          <p className="text-red-600">Rejected files:</p>
          <ul>{fileRejectionItems}</ul>
        </div>
      )}
    </div>
  );
};
