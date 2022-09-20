export const state = () => ({
  skills: [
    {
      name: 'VUE',
      progress: 90,
    },
    {
      name: 'REACT',
      progress: 70,
    },
    {
      name: 'OBJECTION',
      progress: 60,
    },
    {
      name: 'EXPRESS',
      progress: 70,
    },
    {
      name: 'SQL',
      progress: 60,
    },
    {
      name: 'KNEX',
      progress: 50,
    },
  ],
})

export const getters = {
  skills: (state) => state.skills,
}
