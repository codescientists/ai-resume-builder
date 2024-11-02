import { Schema, model, models } from "mongoose";

// Define schema for Professional Experience
const experienceSchema = new Schema({
    positionTitle: { type: String, default: 'Full Stack Web Developer' },
    companyName: { type: String, default: 'Tech Solutions Inc.' },
    city: { type: String, default: 'San Francisco' },
    state: { type: String, default: 'CA' },
    startDate: { type: Date, default: new Date('2022-01-01') }, // Default start date
    endDate: { type: Date, default: new Date('2023-12-31') }, // Default end date
    summary: { 
      type: String, 
      default: `- Developed and maintained web applications using React, Node.js, and MongoDB.
      - Implemented responsive UI using HTML, CSS, and TailwindCSS.
      - Worked on API integration and database management.
      - Collaborated with the design and product teams to ensure seamless user experience.
      - Improved performance of existing codebase by 25% through optimization techniques.` 
    },
});

// Define schema for Education
const educationSchema = new Schema({
    universityName: { type: String, default: 'University of California, Berkeley' },
    degree: { type: String, default: 'Bachelor of Science in Computer Science' },
    percentage: { type: String, default: '3.8 GPA' }, // Example GPA
    startDate: { type: Date, default: new Date('2018-09-01') }, // Default start date
    endDate: { type: Date, default: new Date('2022-06-15') }, // Default end date
    description: { 
      type: String, 
      default: 'Studied data structures, algorithms, and full-stack web development.' 
    },
});

// Define schema for Skills
const skillSchema = new Schema({
    name: { type: String, default: 'JavaScript' },
    progress: { type: Number, default: 5 }, // Progress is a number between 0 and 100
});

// Define schema for the entire Resume
const ResumeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    resumeTitle: { type: String, default: 'Full Stack Developer Resume' },
    firstName: { type: String, default: 'John' },
    lastName: { type: String, default: 'Doe' },
    jobTitle: { type: String, default: 'Full Stack Web Developer' },
    address: { type: String, default: '123 Web Dev St, San Francisco, CA 94105' },
    phone: { type: String, default: '415-123-4567' },
    email: { type: String, default: 'johndoe@example.com' },
    summary: { 
      type: String, 
      default: 'Highly skilled Full Stack Developer with 3+ years of experience in building web applications using JavaScript, React, Node.js, and MongoDB. Passionate about creating responsive, scalable, and user-friendly web solutions.'
    },
    professionalExperience: { type: [experienceSchema], default: [] }, // Array of experiences
    education: { type: [educationSchema], default: [] }, // Array of education entries
    skills: { 
      type: [skillSchema], 
      default: [
        { name: 'JavaScript', progress: 5 },
        { name: 'React', progress: 5 },
        { name: 'Node.js', progress: 4 },
        { name: 'MongoDB', progress: 4 },
        { name: 'HTML/CSS', progress: 5 }
      ] 
    }, // Array of skills
    theme: { type: String, default: '#cd93ff' }, // Default theme color (blue)
}, {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` timestamps
});

const Resume = models.Resume || model('Resume', ResumeSchema);

export default Resume;