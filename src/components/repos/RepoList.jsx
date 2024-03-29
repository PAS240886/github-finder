import PropTypes from 'prop-types'

function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
    <div className='card-body'>
        <h2 className='text-3xl my-3 font-bold card-title'>
            Top repositories
        </h2>
        {repos.map((repo)=>(
            <h3>{repo.name}</h3>
        ))}
    </div>
    </div>
  );
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired   
}
export default RepoList;
