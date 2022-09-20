export const state = () => ({
  skills: [
    {
      name: 'VUE',
      progress: 90,
    },
    {
      name: 'REACT',
      progress: 80,
    },
    {
      name: 'OBJECTION',
      progress: 70,
    },
    {
      name: 'EXPRESS',
      progress: 70,
    },
    {
      name: 'SQL',
      progress: 70,
    },
  ],
})

export const getters = {
  skills: (state) => state.skills,
}
