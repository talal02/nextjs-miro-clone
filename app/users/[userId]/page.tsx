interface UserIdPageProps {
  params: {
    userId: string;
  };
};

const UserIdPage = ({
  params
}: UserIdPageProps) => {
  
  return <div>User Id: {params.userId}</div>
}

export default UserIdPage;