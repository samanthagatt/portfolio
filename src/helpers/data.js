export const externalLinks = {
  gitHub: "https://github.com/samanthagatt",
  sourceCode: "https://github.com/samanthagatt/portfolio/tree/master",
  linkedIn: "https://www.linkedin.com/in/samantha-gatt/",
  resume: "https://docs.google.com/document/d/1D6nCrsr3SUI0taqZWhLgfPdYK7Db08MaJNsO-fRpvRQ/edit?usp=sharing"
};

export const projects = [
  {
    name: "Electrify America",
    description: "The Electrify America app lets you find a charging station nearby, charge your EV, and manage your charging session. Now includes managing charging at home on personal L2 chargers.",
    appStoreLink: "https://apps.apple.com/us/app/electrify-america/id1458030456"
  },
  {
    name: "Simple Networking",
    description: "Swift Package to simplify making network requests. Made with use cases using JSON responses and OAuth 2.0 for authentication in mind, but hopefully customizable for other use cases as well. Uses a development snapshot of Swift so it can utilize throwing specific error types. Currently in refinement.",
    githubLink: "https://github.com/samanthagatt/SimpleNetworking"
  },
  {
    name: "Paint a Pic", 
    description: "A fun puzzle game where you reveal a pixelated picture by logically filling in squares on a grid based on the puzzle's rules",
    githubLink: "https://github.com/samanthagatt/Nonograms",
    appStoreLink: "https://apps.apple.com/us/app/paint-a-pic/id1523554689"
  },
  {
    name: "Dream App", 
    description: "An app that allows users to record themselves retelling their dreams.",
    githubLink: "https://github.com/samanthagatt/Dream-App-iOS",
  },
  {
    name: "Copy List", 
    description: "An iOS app that aids in converting Spotify playlists to Apple Music playlists and vice versa. Not finished, on pause.",
    githubLink: "https://github.com/samanthagatt/CopyList"
  },
  {
    name: "Facial Exercises",
    description: "An app made during a 2-day hackathon that mimicks post-stroke exercises using ARKit to track movement of specific facial features.",
    githubLink: "https://github.com/vukrado/Facial-Exercises"
  },
  {
    name: "Flashcards",
    description: "An app that lets you create and organize flashcards whether they're typed or hand drawn on an iOS device. Made as an independent project during my education at Lambda School (Now Bloom Institute of Technology).",
    githubLink: "https://github.com/samanthagatt/Flashcards-App"
  }
];

export const work = [
  {
      title: "Lead iOS Developer",
      company: "S44 Energy",
      dateRange: "Sep. 2020 - Feb. 2024"
  },
  {
      title: "iOS Mobile Developer",
      company: "New Era Technology",
      dateRange: "Jul. 2019 - Oct. 2019"
  },
  {
      title: "iOS Developer & Technical Lead",
      company: "Mobile Mentor",
      dateRange: "Apr. 2019 - Jun. 2019"
  }
];

export const education = [
  {
      degree: "iOS Development Certificate",
      institution: "Bloom Institute of Technology",
      description: "6+ month software development and computer science academy"
  },
  {
      degree: "B.S. in Biology",
      institution: "Florida Gulf Coast University",
      description: "Conducted 3+ years of bioinformatic research (analysis of biological data through computer algorithms)"
  }
];

export const skills = [
  {
      title: "Languages",
      elements: ["Swift", "Objective-C", "Groovy", "C", "Java", "Python", "JavaScript", "HTML", "CSS"]
  },
  {
      title: "Libraries",
      elements: ["UIKit", "SwiftUI", "HealthKit", "ARKit", "AVFoundation", "CoreData", "Vapor (Server-Side Swift)", "React", "Material UI"]
  },
  {
      title: "Additional",
      elements: ["Git", "Firebase", "Azure", "Jenkins", "Fastlane", "Unit and UI testing", "Network requests", "REST APIs", "Algorithms and data structures", "Design patterns", "Pair programming"]
  }
];

export const footerLInks = [
  {
    name: "GitHub", 
    url: externalLinks.gitHub
  },
  {
    name: "LinkedIn", 
    url: externalLinks.linkedIn,
  },
  {
    name: "Resume",
    url: externalLinks.resume
  },
  {
    name: "Source code",
    url: externalLinks.sourceCode
  }
];
