import List from "../UI/List";
import Timeline from "../UI/Timeline";

function Education() {
  return (
    <div className="Educationtimeline -gaop">
      <Timeline>
        <List
          date="25 April 2025 "
          title="11th Grade (Ongoing)"
          description={
            <>
              Studying in the{" "}
              <strong>Delhi Public School Bhaghpat </strong>
               cruently.
            </>
          }
        />
        <List
            date="30 March 2025"
            title="10th Grade (Pass out)"
            description="Pass the 10th Grade with good marks and secure 1st position both section."
        />
        <List
            date="27 March 2023"
            title="8th Grade (Pass out)"
            description="Pass the 8th Grade with good marks and secure 3rd position both section."
        />
      </Timeline>
    </div>
  );
}

export default Education;
