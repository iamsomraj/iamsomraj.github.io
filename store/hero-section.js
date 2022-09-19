export const state = () => ({
  avatar_url: 'portfolio/avatar-modified_ozofdm.png',
  name: 'Somraj Mukherjee',
  designation: 'Full Stack Developer',
  description:
    'I am a full stack developer with 3+ years of experience in web development. I have worked on various projects using different technologies. I am a quick learner and always ready to learn new technologies. I am a team player and always ready to help my team members.',
})

export const getters = {
  avatar_url: (state) => state.avatar_url,
  name: (state) => state.name,
  designation: (state) => state.designation,
  description: (state) => state.description,
}
