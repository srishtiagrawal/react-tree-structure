const explorer = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'index.html',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'data',
          isFolder: true,
          items: [
            {
              name: 'folderStructure.js',
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
  ],
};
export default explorer;
