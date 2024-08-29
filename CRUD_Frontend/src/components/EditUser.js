import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const EditUser = ({ users, setUsers }) => {
  const [user, setUser] = useState(defaultValue);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const userToEdit = users.find((u) => u._id === parseInt(id));
    // console.log(userToEdit);
    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    setUsers(users.map((u) => (u._id === parseInt(id) ? user : u)));
    navigate('/all');
  };
  const OnValueChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user);
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => {
            OnValueChange(e);
          }}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => {
            OnValueChange(e);
          }}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => {
            OnValueChange(e);
          }}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            OnValueChange(e);
          }}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => handleSubmit()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
