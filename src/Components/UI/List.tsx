
import { useEffect, useRef, useState } from "react";

export interface ListProps {
  date?: string;
  title?: string;
  description?: string;
  editable?: boolean;
  onChange?: (data: { date: string; title: string; description: string }) => void;
  className?: string;
}

export default function List({
  date = "12march 2023",
  title = "Geneatve ai",
  description =
    "Gett the top 12 position accros this internationl Hackathon with some miner detail like the ML masters with creating the largest data sets in the lest possible time given by the bounded machine",
  editable = false,
  onChange,
  className = "",
}: ListProps) {
  const [localDate, setLocalDate] = useState(date);
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);

  useEffect(() => setLocalDate(date), [date]);
  useEffect(() => setLocalTitle(title), [title]);
  useEffect(() => setLocalDescription(description), [description]);

  const dateRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLDivElement | null>(null);

  function notifyChange() {
    onChange?.({ date: localDate, title: localTitle, description: localDescription });
  }

  function handleBlur(field: "date" | "title" | "description") {
    if (field === "date") setLocalDate(dateRef.current?.textContent ?? "");
    if (field === "title") setLocalTitle(titleRef.current?.textContent ?? "");
    if (field === "description") setLocalDescription(descRef.current?.textContent ?? "");
    notifyChange();
  }

  return (
    <div className={`list block ms-4 place-items-start mb-10 -mt-1. ${className}`}>
      <div className="circle absolute mt-1.5 -ml-5.5" />

      <div
        ref={dateRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onBlur={() => handleBlur("date")}
        className="time text-gray-500 text-sm"
        aria-label="list-date"
      >
        {localDate}
      </div>

      <div
        ref={titleRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onBlur={() => handleBlur("title")}
        className="title text-lg text-white font-semibold"
        aria-label="list-title"
      >
        {localTitle}
      </div>

      <div
        ref={descRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onBlur={() => handleBlur("description")}
        className="discription text-base text-gray-400 text-left"
        aria-label="list-description"
      >
        {localDescription}
      </div>
    </div>
  );
}
