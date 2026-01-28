import './files.css';

const files = [
    { ext:'html', name:'index', date:'1/27/2026 - 10:58 am'},
    { ext:'js', name:'app', date:'1/27/2026 - 10:58 am'},
    { ext:'css', name:'style', date:'1/27/2026 - 10:58 am'},
];

function FileObject({data}) {
    return(
        <div className='fileobject'>
            <div className='fileicon'>{data.ext}</div>
            <div className='filedata'>
                <div className='filename'>{data.name}</div>
                <div className='filedate'>{data.date}</div>
            </div>
            <div className='downbtn'>
                <button>Download</button>
            </div>
        </div>
    );
}

function FileList() {
    const filelist = files.map(file =>
        <FileObject data={file}/>
    );

    return(
        <div className='filelist'>
            {filelist}
        </div>
    );
}

export default FileList