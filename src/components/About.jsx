function About() {
  return (
    <>
      <div className="dark:bg-black">
        <div className="container mx-auto">
          <div className="dark:bg-black">
            <h1 className="text-5xl text-center font-bold dark:text-white">
              About
            </h1>
          </div>
          <div>
            <p className="text-xl mt-10 dark:text-white">
              My name is Manpreet Singh. I am a Full Stack Developer. I am
              skilled in HTML, CSS, JavaScript, jQuery, Ajax, Bootstrap, PHP,
              and MySQL. I have good expertise in Core PHP as well as MVC
              Frameworks like Laravel and Codeigniter. I worked on different
              projects with different requirements with good problem-solving
              capabilities. I am responsible, dedicated, self-motivated, and
              focused on the successful outcomes of the project. Willing to work
              hard and have a great desire to learn.
            </p>
            <div className="grid grid-cols-2 mt-6">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-5/6 w-5/6"
                  alt=""
                />
              </div>
              <div>
                <div className="grid grid-cols-4 gap-4 mt-6 flex">
                  <img src="html.png" alt="" height={100} width={100} />
                  <img src="css.png" alt="" height={100} width={100} />
                  <img src="js.png" alt="" height={100} width={100} />
                  <img src="jq.png" alt="" height={100} width={100} />
                </div>
                <div className="grid grid-cols-4 gap-4 mt-6 flex">
                  <img src="mysql.png" alt="" height={100} width={100} />
                  <img src="php.png" alt="" height={100} width={100} />
                  <img src="laravel.png" alt="" height={100} width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
