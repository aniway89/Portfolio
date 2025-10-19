import List from '../UI/List'
import Timeline from '../UI/Timeline'
function Experience() {
  return (
    <div className="Experience ">
        <Timeline>
            <List
                date="7 June 2025 [2 Month]"
                title="Lead Developer"
                description={
                <>
                    Led development of a fully responsive <strong>e-commerce platform</strong>, focusing on <strong>UI/UX</strong>, performance, and scalability.
                </>
                }

            />
            <List
            date="21 February 2025 [1 Month]"
            title="Frontend Developer (Logic & UI)"
            description="Worked with a third-party VPS Minecraft server hosting company to design and develop their panel UI and website."
            />

            <List
            date="20 December 2024 [2 Month]"
            title="Lead Developer"
            description="Developed and maintained custom Discord bots for server management and automation."
            />

            <List
            date="13 November 2024"
            title="Assistant Developer"
            description="Assisted in building a product landing page for a client through an agency."
            />

        </Timeline>
        
    </div>
  )
}

export default Experience
