import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export interface BlogcardProps {
  date?: string;
  title?: string;
  description?: string;
  readMoreUrl?: string;
  editable?: boolean;
  onChange?: (data: { date: string; title: string; description: string }) => void;
  className?: string;
}

export default function Blogcard({
  date = "12 December 2024",
  title = "How i buld my first webite.",
  description = "What is use to build this web and how the f this work.",
  readMoreUrl = "#",
  editable = false,
  onChange,
  className = "",
}: BlogcardProps) {
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
    <div className={`Blogcard flex-col items-baseline mt-10 ${className}`}>
      <div className="circle absolute -ml-6.5 mt-1" />

      <div
        ref={dateRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onBlur={() => handleBlur("date")}
        className="date text-sm  text-gray-500"
      >
        {localDate}
      </div>

      <div
        ref={titleRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onBlur={() => handleBlur("title")}
        className="post-titel text-lg font-semibold text-white"
      >
        {localTitle}
      </div>

      <div className="rorrr  mt-1">
        <div
          ref={descRef}
          contentEditable={editable}
          suppressContentEditableWarning={true}
          onBlur={() => handleBlur("description")}
          className="discription text-base text-gray-400 "
        >
          {localDescription}
        </div>
      </div>

      <div className="ror-cont flex-co items-center justify-between ">
        <a href={readMoreUrl} className="read-now text-base flex items-center gap-2 text-blue-400">
          Read more <FaArrowRightLong className="mt-1" />
        </a>
      </div>
    </div>
  );
}
