import { Mail, Linkedin, Phone, Github, Award, Briefcase, Code, Shield, Server } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-blue-600 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Aditya Solanki</h1>
          <p className="text-xl md:text-2xl text-blue-100">Cloud & DevOps Engineer</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href="mailto:adityasolanki51@gmail.com" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2">
              <Mail size={20} /> Contact Me
            </a>
            <a href="https://linkedin.com/in/adityaxsolanki" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
  <div className="max-w-3xl mx-auto text-lg leading-relaxed">
    <p className="mb-6">
      I am a Cloud & DevOps Engineer with hands-on experience in AWS, Terraform, CI/CD, and automation. 
      Skilled in architecting and managing scalable cloud infrastructure, I excel in scripting and security best practices 
      to ensure optimal system performance. With a passion for automation, I focus on reducing operational overhead 
      and improving efficiency through infrastructure optimization. I am driven by the challenge of creating robust, 
      automated solutions that enhance both speed and reliability in cloud environments.
    </p>
  </div>
</section>


      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkillCard 
        icon={<Server />}
        title="Cloud Infrastructure"
        description="AWS (EC2, ASG, ALB, IAM, RDS) with Terraform & Ansible for scalable cloud environments."
      />
      <SkillCard 
        icon={<Code />}
        title="CI/CD Pipelines"
        description="Automated deployments with GitHub Actions & Jenkins, ensuring continuous delivery."
      />
      <SkillCard 
        icon={<Shield />}
        title="Monitoring & Logging"
        description="Real-time monitoring with Prometheus & Grafana, CloudWatch, and ELK Stack for system performance."
      />
      <SkillCard 
        icon={<Code />}
        title="Scripting & Automation"
        description="Infrastructure automation using Python, Bash, PowerShell for efficient and repeatable processes."
      />
      <SkillCard 
        icon={<Server />}
        title="Containers & Orchestration"
        description="Docker & Kubernetes for containerized app deployments, scaling, and orchestration."
      />
      <SkillCard 
        icon={<Shield />}
        title="Security & Access Management"
        description="Configuring IAM, Security Groups, Firewalls, and VPN for secure and compliant cloud environments."
      />
    </div>
  </div>
</section>


      {/* Experience Section */}
<section className="py-20 container mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
  <div className="max-w-3xl mx-auto space-y-12">
    <ExperienceCard 
      title="DevOps Engineer"
      company="Technology Next"
      period="Feb 2023 - Present"
      responsibilities={[
        "Automated AWS infrastructure provisioning using Terraform & Ansible, reducing deployment time by 40%.",
        "Designed and optimized CI/CD pipelines with GitHub Actions & Jenkins, enhancing deployment efficiency.",
        "Deployed Kubernetes (K3s) for containerized applications, ensuring high availability & scalability.",
        "Implemented Prometheus & Grafana for real-time monitoring, reducing downtime by 30%.",
        "Secured cloud environments by configuring IAM policies, Security Groups & VPN access controls.",
        "Integrated AWS Auto Scaling & Load Balancers, improving system performance and reducing costs."
      ]}
    />
  </div>
</section>


      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="AWS + Terraform + CI/CD (Automated Infrastructure Deployment)"
              description="Developed a fully automated AWS environment using Terraform with S3 backend & DynamoDB state locking. Implemented CI/CD with GitHub Actions & Jenkins to automate infrastructure updates."
              link="https://github.com/adityaxsolanki/terraform-setup"
            />
            <ProjectCard 
              title="Jenkins + Docker + Kubernetes (Production-Grade Deployment)"
              description="Designed a Jenkins pipeline to automate Dockerized Nginx deployments on K3s. Integrated Helm charts for managing Kubernetes deployments efficiently."
              link="https://github.com/adityaxsolanki/nginx-docker-ci-cd"
            />
            <ProjectCard 
              title="AWS Monitoring & Logging (Prometheus + Grafana + CloudWatch)"
              description="Set up real-time monitoring with Prometheus & Grafana, visualizing key infrastructure metrics. Implemented AWS CloudWatch Logs & Alerts for proactive system monitoring."
              link="https://github.com/adityaxsolanki/terraform-monitoring-setup"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
<section className="py-20 bg-white dark:bg-gray-800">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Career Essentials in Cybersecurity",
          issuer: "Microsoft",
          date: "Feb 2025"
        },
        {
          title: "Introduction to AWS IAM",
          issuer: "Amazon Web Services",
          date: "Feb 2025"
        },
        {
          title: "Introduction to DevOps",
          issuer: "Great Learning",
          date: "Oct 2024"
        },
        {
          title: "Build Your Generative AI Productivity Skills",
          issuer: "Microsoft",
          date: "Jun 2024"
        },
        {
          title: "Career Essentials in Data Analysis",
          issuer: "Microsoft",
          date: "Jun 2024"
        }
      ].map((cert, index) => (
        <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <Award className="text-blue-600 dark:text-blue-400 mb-4" size={24} />
          <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Contact Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
    <div className="max-w-xl mx-auto flex flex-col gap-6">
      <a href="mailto:adityasolanki51@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
        <Mail className="text-blue-600 dark:text-blue-400" size={24} />
        <div>
          <p className="font-semibold">Email</p>
          <p className="text-gray-600 dark:text-gray-300">adityasolanki51@gmail.com</p>
        </div>
      </a>
      <a href="tel:+918882236313" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
        <Phone className="text-blue-600 dark:text-blue-400" size={24} />
        <div>
          <p className="font-semibold">WhatsApp</p>
          <p className="text-gray-600 dark:text-gray-300">+91 8882236313</p>
        </div>
      </a>
      <a href="https://linkedin.com/in/aditya-solanki-4b8247270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
        <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
        <div>
          <p className="font-semibold">LinkedIn</p>
          <p className="text-gray-600 dark:text-gray-300">Aditya Solanki</p>
        </div>
      </a>
    </div>
    <p className="text-center mt-6 text-lg text-gray-600">Feel free to reach out for opportunities or collaborations!</p>
  </div>
</section>

{/* Additional Links Section */}
<section className="py-20 bg-white dark:bg-gray-800">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Additional Links</h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <a href="https://github.com/adityaxsolanki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
        <Github className="text-blue-600 dark:text-blue-400" size={24} />
        <div>
          <p className="font-semibold">GitHub</p>
          <p className="text-gray-600 dark:text-gray-300">adityaxsolanki</p>
        </div>
      </a>
      <a href="https://adityaxsolanki.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
        <Server className="text-blue-600 dark:text-blue-400" size={24} />
        <div>
          <p className="font-semibold">Portfolio</p>
          <p className="text-gray-600 dark:text-gray-300">adityaxsolanki.netlify.app</p>
        </div>
      </a>
    </div>
  </div>
</section>


      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Aditya Solanki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ExperienceCard({ title, company, period, responsibilities }: { 
  title: string; 
  company: string; 
  period: string; 
  responsibilities: string[] 
}) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-2">{company}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{period}</p>
      <ul className="list-disc list-inside space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">{resp}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">View Project</a>
    </div>
  );
}

export default App;
