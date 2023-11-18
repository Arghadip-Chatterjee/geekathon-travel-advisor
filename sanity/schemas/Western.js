// schemas/pet.js
export default {
    name: 'western',
    type: 'document',
    title: 'Western',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
  
      {
          title: 'Description',
          name: 'description',
          type: 'text'
      },
  
      {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
  
    {
        title: 'Phone Number',
        name: 'phone',
        type: 'number'
    },

    {
        title: 'URL',
        name: 'Url',
        type: 'url'
    }
  
    ]
  }