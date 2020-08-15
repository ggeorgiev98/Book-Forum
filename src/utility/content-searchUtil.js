const genreSearch = [
    {   value: '',
        label:""
    },
    {
        value: 'fantasy',
        label:'Fantasy' 
    }, 
    {   
        value: 'fantastic',
        label:'Fantastic'
    }, 
    {
        value: 'novel',
        label:'Novel' 
    },
    {
        value: 'drama',
        label:'Drama' 
    },
    {
        value: 'criminal',
        label:'Criminal' 
    },
    {
        value: 'history',
        label:'History' 
    },
    {
        value: 'historical novel',
        label:'Historical novel' 
    }   
];

const paramSearch = [
    {
        value:'title',
        label:'Title' 
    },
    {
        value:'author',
        label:'Author'
    },
    {
        value:'published',
        label:'Year of publishing'
    }
];

module.exports = {
    genreSearch,
    paramSearch
}