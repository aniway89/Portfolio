function Timeline({ children }: { children?: React.ReactNode }) {
  return (
    <div className="Timeline p-10">
      <div className="time-line ">
        {children}
      </div>
    </div>
  );
}

export default Timeline;
