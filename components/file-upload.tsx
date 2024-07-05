"use client";

import { FilePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export const FileUpload = ({ ...props }) => {
  const [blob, setBlob] = useState<string>();
  const [file, setFile] = useState<File>();
  const [fileEnter, setFileEnter] = useState(false);

  const remove = () => {
    setBlob("");
    setFile(undefined);
  };

  return (
    <>
      {!file ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setFileEnter(true);
          }}
          onDragLeave={(e) => {
            setFileEnter(false);
          }}
          onDragEnd={(e) => {
            e.preventDefault();
            setFileEnter(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setFileEnter(false);
            if (e.dataTransfer.items) {
              [...e.dataTransfer.items].forEach((item, i) => {
                if (item.kind === "file") {
                  const file = item.getAsFile();
                  if (file) {
                    let blobUrl = URL.createObjectURL(file);
                    setBlob(blobUrl);
                    setFile(file);
                  }
                  console.log(`items file[${i}].name = ${file?.name}`);
                }
              });
            } else {
              [...e.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
              });
            }
          }}
          className={` flex h-72 w-full flex-col items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-center text-sm placeholder:text-neutral-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-slate-950 dark:placeholder:text-neutral-400`}
        >
          <label
            htmlFor="file"
            className={cn(
              "flex h-full w-full flex-col items-center justify-center gap-2 rounded-md focus-visible:z-20 focus-visible:outline  focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-sky-400",
              fileEnter ? "border-2 border-sky-400" : "border border-dashed",
            )}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Spacebar") {
                e.preventDefault();
                e.currentTarget.click();
              }
              if (e.key === "Enter") e.currentTarget.click();
            }}
          >
            <FilePlus size={52} strokeWidth={1.25} />
            Klik hier of sleep een bestand
          </label>
          <Input
            {...props}
            id="file"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => {
              let files = e.target.files;
              if (files && files[0]) {
                console.log(files[0]);
                let blobUrl = URL.createObjectURL(files[0]);
                setBlob(blobUrl);
                setFile(files[0]);
              }
            }}
          />
        </div>
      ) : (
        <div className="relative flex h-72 w-full flex-col items-center justify-center rounded-md border border-neutral-200 bg-white text-center text-sm placeholder:text-neutral-500  disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-slate-950 dark:placeholder:text-neutral-400">
          <object
            className={cn(
              "max-h-full max-w-full grow",
              file?.type === "application/pdf" && "w-full",
            )}
            data={blob}
            type={file?.type}
          />
          <Button onClick={remove} className="absolute right-4 top-4">
            verwijderen
          </Button>
        </div>
      )}
    </>
  );
};
