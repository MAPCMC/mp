import { PageHeader } from "@/components/page-header";
import { PageMain } from "@/components/page-main";
import type { Metadata } from "next";
import { NavLink } from "@/components/links";
import { AnchorMenu } from "@/components/anchor-menu";

export const metadata: Metadata = {
  title: "Start nu | Maarten Peene",
};

export default function Page() {
  return (
    <>
      <PageHeader>
        <h1 className="font-serif text-4xl first-letter:capitalize">
          start nu
        </h1>
      </PageHeader>
      <AnchorMenu
        links={[
          { href: "#todo", text: "begin het plan" },
          // { href: "#target", text: "doelgroep" },
          // { href: "#functions", text: "functionaliteit" },
          // { href: "#data", text: "content" },
          // { href: "#conditions", text: "voorwaarden" },
          { href: "#help", text: "vraag om hulp" },
        ]}
      />
      <PageMain>
        <article className="prose prose-slate prose-sm md:prose-base dark:prose-invert prose-headings:font-serif prose-lead:text-inherit prose-headings:font-normal prose-lead:text-lg prose-h2:text-3xl prose-h3:text-2xl prose-li:marker:text-orange-500 -ml-3 mt-6 max-w-[90ch] px-3 py-4 light:bg-light/50 basic:bg-basic/50 dark:bg-dark/50">
          <h2 id="todo">Begin aan een ontwikkelplan</h2>
          <p className="lead">
            Bij de eerste stappen van een nieuw ontwikkelproces komt veel denk-
            en documentatiewerk kijken. Voordat je aan de bouw van een website
            begint, wil je het project in de juiste context plaatsen.
          </p>
          <p>
            Voor het maken van een ontwikkelplan is het belangrijk om bepaalde
            informatie paraat te hebben. Stel jezelf de volgende vragen:
          </p>

          <h3 id="goal">Wat is het doel van de website of webapplicatie?</h3>
          <p>
            Er zijn verschillende redenen om een website of webapplicatie op
            touw te zetten. Deze kan bijvoorbeeld onderdeel zijn van een
            tijdelijke campagne, waarbij je weinig inhoud presenteert, je direct
            een indruk wilt achterlaten en veel leads wilt genereren. Maar het
            kan ook zijn dat je een platform wilt bouwen dat uitnodigt tot
            rustig rondkijken, omdat je wilt dat bezoekers kennismaken met jou
            of je product, of omdat je inhoudelijk de diepte in wilt. Verplaats
            je in de bezoeker: waarom komen zij op jouw website? Wat zoeken zij
            daar, wat wil jij van hen, en waar vinden die belangen elkaar?
          </p>
          <p>
            Een beknopt hoofddoel voor een site of applicatie zou kunnen zijn:
          </p>
          <ul>
            <li>Ik wil m&apos;n product of service verkopen</li>
            <li>Ik wil klanten binden en leads genereren</li>
            <li>Ik wil m&apos;n netwerk vergroten en contact leggen</li>
            <li>Ik wil informatie verstrekken</li>
          </ul>
          <p>
            Het beoogde doel is ook bepalend voor de inhoud van het
            ontwikkeltraject: het zegt je ontwikkelaar waar jouw nadruk ligt.
            Wanneer je inzet op klantbinding, dan heeft een vlekkeloze
            aanmeldingsprocedure extra waarde. En andersom: bij een platform
            waar weinig complexe data wordt gebruikt, is het zonde om veel uit
            te geven aan uitgebreide optimalisatie. Wanneer er later in het
            proces lastige keuzes moeten worden gemaakt, geeft een helder doel
            de houvast die jouw wensen centraal zet.
          </p>
          <h3 id="target">Wie is de doelgroep?</h3>
          <p>
            Het helpt om je een beeld te vormen van je bezoekers. Wie probeer je
            aan te spreken? Wat motiveert hen? Of misschien simpeler: wat is het
            probleem waarmee ze zitten, en hoe los jij dat voor hen op?
          </p>
          <p>
            Vanuit die gedachte ontstaat een beeld van het soort bezoekers waar
            je communicatie zich het meest op richt: wat kan je over hen
            vertellen? Wat is bijvoorbeeld hun leeftijd en achtergrond? Waar
            wonen ze, en wat zijn hun interesses?
          </p>
          <p>
            Als het aankomt op de mensen die je site gebruiken: vergeet zeker je
            gebruikers achter de schermen niet. Wie gaat contentbeheer op zich
            nemen? Wat kan je zeggen over de capaciteiten en belangen van deze
            groep?
          </p>
          <p>
            Zulke groepsbeelden geeft een ontwikkelaar inzicht in de manier
            waarop je platform gebruikt gaat worden. Groepen hebben
            uiteenlopende verwachtingen van online ervaringen. In een formele
            setting wordt bijvoorbeeld meer gewerkt met tekst en laptops,
            terwijl een jongere doelgroep meer mobiel en visueel is ingesteld.
            Wanneer je doelgroep duidelijk is, kan je ontwikkelaar daarop
            inspelen.
          </p>
          <h3 id="functions">Welke functionaliteiten zijn er nodig?</h3>
          <p>
            De schaal en planning van het project wordt grotendeels ingegeven
            door de functionaliteiten die nodig zijn. Een webshop heeft
            bijvoorbeeld een heel ander pakket aan functionaliteiten nodig dan
            een portfolio. Laat staan wanneer het idee een applicatie is die een
            compleet nieuwe webservice biedt.
          </p>
          <p>
            Wat wordt er nou precies bedoeld met functionaliteiten? Een paar
            voorbeelden:
          </p>
          <ul>
            <li>Gebruikersregistratie en -beheer</li>
            <li>Een productfeed met zoekfilters</li>
            <li>Een contactformulier</li>
            <li>De optie om een like of review te plaatsen</li>
            <li>Integratie van een externe afsprakenplanner</li>
            <li>Een downloadfunctie</li>
            <li>Een social media feed</li>
            <li>Een chatfunctie</li>
            <li>Een AI-image generator</li>
          </ul>
          <p>
            Om grip op het project te houden, is het van belang om de cruciale
            en gewenste functionaliteiten op een rijtje te hebben. Laat je
            hierbij leiden door je doel: welke informatie en handelingen zijn
            vereist om je doel te bereiken? En welke acties zouden dit indirect
            ondersteunen? Wees niet bang om kritisch te zijn: een te veel aan
            functionaliteiten kan je doel in de weg zitten. Vaak is een simpele,
            gerichte pagina effectiever dan een uitgebreide, maar
            onoverzichtelijke website.
          </p>
          <h3 id="data">Welke content moet er op de website komen?</h3>
          <p>
            Voordat je nu een tekstverwerker opent en hele pagina&apos;s gaat
            uittypen: stop! Wanneer een ontwikkelaar deze vraag stelt, zijn we
            in eerste instantie op zoek naar de vorm van de inhoud. Dus niet de
            tekst zelf, maar dat we weten dat er platte tekstpagina&apos;s
            komen. Wil je afbeeldingen kunnen plaatsen in deze tekst? Ga je veel
            werken met afbeeldingen? Komt er een videoblog, om maar wat te
            noemen? Door dit soort wensen te bespreken, kan een ontwikkelaar de
            aard van de opslag in kaart brengen.
          </p>
          <p>
            Denk hierbij ook aan hoe je de content voor je ziet op de pagina, en
            wat je wilt kunnen aanpassen. Zo weten we wat de blokken zijn
            waarmee we de site of applicatie bouwen, en hoe we die blokken aan
            elkaar koppelen. Deze informatie is cruciaal voor het inrichten van
            je datastructuur.
          </p>
          <p>
            Een voorbeeld: we plaatsen een nieuwsfeed op de homepagina; hoe
            komen artikelen hier in? Verschijnen ze automatisch op criteria, of
            selecteer je ze handmatig? Hoeveel mogen er zijn? Tonen we een
            aparte inleiding, of de eerste regels van het artikel? Dit zegt veel
            over de manier waarop nieuwsartikelen worden opgeslagen, en welke
            velden aan de achterkant in een editor moeten verschijnen.
          </p>
          <p>
            Het is geen enkel probleem om hier in een later stadium ideeën over
            te vormen, of wanneer je überhaupt wilt dat dit voor je wordt
            bepaald. Maar weet dat deze vragen worden gesteld en beantwoord; als
            jij hier inspraak in wilt hebben, train jezelf dan om in dit soort
            blokken over je content na te denken.
          </p>
          <h3 id="conditions">Wat zijn de randvoorwaarden?</h3>
          <p>
            De magie van het internet: vrijwel niets is te gek. Gegeven
            voldoende tijd, capaciteit en budget, kan je bijna alles laten
            maken. Maar in de praktijk zijn die grenzen er altijd: hoe eerder je
            ze vaststelt, hoe helderder de projectopzet. Het klinkt
            contra-intuïtief, maar juist door de kaders van een ontwikkeltraject
            te definiëren, ontstaat er ruimte en creativiteit - de vijver van
            mogelijke oplossingen is ineens niet meer oneindig groot.
          </p>
          <p>
            Wees dus niet bang om direct de randvoorwaarden neer te zetten. Denk
            hierbij aan:
          </p>
          <ul>
            <li>Het ontwikkelbudget</li>
            <li>Harde deadlines</li>
            <li>Bestaande technische vereisten</li>
          </ul>
          <p>
            En als het aankomt op onduidelijke verwachtingen en vertragingen,
            speelt de taakverdeling en communicatie vaak een grote rol. Denk
            daarom vast na over het bespreken jouw idee van een prettige
            werkwijze:
          </p>
          <ul>
            <li>
              Wat speelt er rondom het traject wat van invloed kan zijn op het
              verloop?
            </li>
            <li>Bij wie kunnen ontwikkelaars terecht met vragen?</li>
            <li>Wat spreek je af over de oplevering van content?</li>
            <li>
              Wat spreek je af over het proces na oplevering? Hoeveel
              begeleiding verwacht je te krijgen?
            </li>
          </ul>
          <h2 id="help">Vraag anderen om hulp</h2>
          <p>
            Het is absoluut niet nodig om deze vragen vooraf aan te kunnen
            leveren: door hier samen met je ontwikkelaar naar te kijken, kom je
            tot een gemeenschappelijk beeld van het project. Het is een
            indicatie van de mogelijke vraagstukken die je gaat tegenkomen,
            zodat je voorbereid van start kunt gaan. Juist iemand uit het veld
            kan deze informatie vertalen naar een compleet ontwikkelplan, en je
            op een laagdrempelige manier begeleiden bij het opstellen hiervan.
          </p>
          <p>
            Klaar om een ontwikkelaar bij dit proces te betrekken?{" "}
            <NavLink href="/development#quotation">
              Vraag direct een offerte aan!
            </NavLink>
          </p>
        </article>
      </PageMain>
    </>
  );
}
