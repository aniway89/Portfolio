

function Profile() {
  return (
    <div className="profile  flex justify-between mt-1 items-center">
        <div className="left flex-col">
            <div className="name text-3xl grid  ">
                Ayan Khan
                <div className="short-info ds font-normal text-xl ">
                    Developer
                </div>
            </div>
            <div className="short-discription ds-2 text-base mt-5">
                Crafting smart, minimal, and user-focused web experiences with a creative touch.
            </div>
        </div>
        <div className="right flex-col items-center">
            <div className="links mb-5 flex text-xl gap-6 cursor-pointer text-gray-300">
               <a href="https://github.com/aniway89/" className="link"><i className="bi bi-github"></i></a>
               <a href="https://www.linkedin.com/in/ayan-khan-04a5b7388/" className="link"><i className="bi bi-linkedin"></i></a>
               <a href="https://discord.gg/spNu94g32q" className="link"><i className="bi bi-discord"></i></a>
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yoru.ayan@gmail.com" target="_self" className="link"><i className="bi bi-envelope-fill"></i></a>
            </div>
            <img src="https://i.pinimg.com/736x/46/52/84/465284e0a57de0053b9df87994424256.jpg" alt="" className="logo w-25 cir" />
            <div className="cloud mr-13 mt-30">
                <div className="b-2"></div>
                <div className="b-1"></div>
                <div className="Message flex Items-center justify-center"> Doing something</div>
            </div>
        </div>
    </div>
  )
}

export default Profile
