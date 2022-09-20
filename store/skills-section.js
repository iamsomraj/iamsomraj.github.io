export const state = () => ({
  skills: [
    {
      name: 'HTML',
      progress: 90,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vitae aliquam nunc nisl sit amet enim. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vitae aliquam nunc nisl sit amet enim.',
    },
    {
      name: 'CSS',
      progress: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vitae aliquam nunc nisl sit amet enim. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vitae aliquam nunc nisl sit amet enim.',
    },
    {
      name: 'JavaScript',
      progress: 70,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vitae aliquam nunc nisl sit amet enim. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vitae aliquam nunc nisl sit amet enim.',
    },
  ],
})

export const getters = {
  skills: (state) => state.skills,
}
