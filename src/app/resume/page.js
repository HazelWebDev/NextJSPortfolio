export default function Page() {
  return (
    <>
      <div className="container mx-auto p-4 lg:p-8 bg-[#121212]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-24">
          {/* Left Column */}
          <div className="lg:pr-4">
            <div className="mb-4">
              <h1 className="mb-2 text-2xl sm:text-4xl lg:text-4xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  Hello, I&apos;m Kristen Roggero!
                </span>
              </h1>
              <h2 className="text-lg lg:text-xl font-semibold text-primary">
                A Front-End Engineer
              </h2>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2 text-secondary underline">
                Profile Summary
              </h3>
              <p className="font-secondary text-white">
                A highly motivated web developer with a passion for creating
                dynamic and user-friendly websites. I am experienced with HTML,
                CSS, JavaScript, Next.js, and React.js. Committed to delivering
                high-quality solutions to clients and collaborating with
                cross-functional teams.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-secondary underline underline-primary">
                Work History
              </h3>
              <div className="mb-2">
                <h4 className="text-lg font-semibold text-l1">
                  Front-End Engineer at Infosys
                </h4>
                <p className="text-white font-secondary">
                  August 2022 - Present
                </p>
                <ul class="list-disc list-inside mt-3 font-secondary">
                  <li>
                    Leveraged collaborative teamwork to integrate and tailor
                    Bootstrap components, fostering uniformity and efficiency in
                    UI development.
                  </li>
                  <li>
                    Developed and implemented responsive web designs, ensuring
                    optimal user experiences across various devices and screen
                    sizes by utilizing media queries and flexible grid systems
                    for desktops, tablets, and mobile devices.
                  </li>
                  <li>
                    Spearheaded the creation and execution of responsive web
                    designs, guaranteeing seamless user interactions across
                    diverse devices and screen dimensions through strategic
                    application of media queries and adaptive grid systems for
                    desktops, tablets, and mobile devices.
                  </li>
                  <li>
                    Drove continuous improvement through rigorous code
                    evaluations and constructive feedback sessions, proactively
                    identifying and resolving potential challenges to uphold
                    standards of excellence and long-term maintainability.
                  </li>
                </ul>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-semibold text-l1">
                  Coding Bootcamp at Revature
                </h4>
                <p className="text-l1 font-secondary">May 2022 - August 2022</p>
                <ul class="list-disc list-inside mt-3 font-secondary">
                  <li>
                    Leveraged expertise in Java, Spring Boot, and some front-end
                    technologies to deliver end-to-end web applications meeting
                    business requirements and creative applications.
                  </li>
                  <li>
                    Learned about database management and organization using the
                    database mySQL.
                  </li>
                  <li>
                    Designed and implemented RESTful APIs using Spring Boot,
                    facilitating efficient communication between the front-end
                    and back-end systems, along with database management.
                  </li>
                </ul>
              </div>
              {/* Add more work history items as needed */}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 underline text-primary">
                Contact Information
              </h3>
              <p className="text-primary font-secondary text-l2">
                <strong>Email:</strong> kristenroggero@gmail.com
              </p>
              <p className="text-primary font-secondary text-l2">
                <strong>Phone:</strong> (341) 777-8729
              </p>
              <p className="text-primary font-secondary text-l2">
                <strong>LinkedIn:</strong> linkedin.com/in/your-profile
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary underline">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside font-secondary mb-6">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Git Version Control</li>
                <li>Responsive Web Design</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>HTML5</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary underline">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside font-secondary">
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Interpersonal Communication</li>
                <li>Writing</li>
                <li>Attention to Detail</li>
                <li>Learning</li>
                <li>Creativity</li>
                <li>Critical Thinking</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
