const userProfiles = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Senior UX Designer",
    location: "Madrid, Spain",
    bio: "Passionate about building accessible and human-centric digital products.",
    skills: ["Figma", "React", "User Research"],
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: 2,
    name: "Dr. Sarah Chen",
    role: "Data Scientist",
    location: "Vancouver, Canada",
    bio: "Specializing in machine learning models for climate change analysis.",
    skills: ["Python", "PyTorch", "SQL"],
    status: "busy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 3,
    name: "Jordan Miller",
    role: "Content Strategist",
    location: "Remote",
    bio: "Helping brands find their voice through storytelling and SEO-driven data.",
    skills: ["Copywriting", "Google Analytics", "CMS"],
    status: "active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan"
  }
];

export const TeamDirectory = () => {
  return (
    <div>
      <h3>Team Directory</h3>
      {userProfiles.map((user) => (
        <div key={user.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <img src={user.avatar} alt={`${user.name} avatar`} width="100" />
          <h4>{user.name} - {user.role}</h4>
          <p><strong>Location:</strong> {user.location}</p>
          <p>{user.bio}</p>
          <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </div>
      ))}
    </div>
  );
}