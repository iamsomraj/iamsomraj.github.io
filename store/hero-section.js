export const state = () => ({
  avatar_sepia: 'portfolio/avatar_sepia_xoq3c7.png',
  avatar_grayscale: 'portfolio/avatar_grayscale_te4zhm.png',
  name: 'Somraj Mukherjee',
  designation: 'Full Stack Developer',
  description:
    'I have a passion for web development. I enjoy creating solutions that make life easier for people.',
})
export const getters = {
  avatar_sepia: (state) => state.avatar_sepia,
  avatar_grayscale: (state) => state.avatar_grayscale,
  name: (state) => state.name,
  designation: (state) => state.designation,
  description: (state) => state.description,
}
