<template>
  <div>
    <h2>Users</h2>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.dateofbirth }}</td>
          <td>{{ user.location }}</td>
          <td>
            <button @click="deleteUser(user)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  data() {
    return {
      users: [
        {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      dateofbirth: '1990-05-15',
      location: 'New York',
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      dateofbirth: '1995-10-22',
      location: 'Los Angeles',
    },
    {
      id: 3,
      firstname: 'Tia',
      lastname: 'Zaidan',
      dateofbirth: '2002-08-20',
      location: 'Beirut',
    },
    {
      id: 4,
      firstname: 'Lea',
      lastname: 'Ismail',
      dateofbirth: '2001-05-17',
      location: 'Zahle',
    },
    {
      id: 5,
      firstname: 'Nancy',
      lastname: 'Zein',
      dateofbirth: '1999-12-04',
      location: 'France',
    },
    {
      id: 6,
      firstname: 'Carole',
      lastname: 'Hek',
      dateofbirth: '2011-08-08',
      location: 'Baalbak',
    },
    {
      id: 7,
      firstname: 'Ali',
      lastname: 'Haidar',
      dateofbirth: '2000-03-23',
      location: 'Los Angeles',
    },
    {
      id: 8,
      firstname: 'Wissam',
      lastname: 'Bitar',
      dateofbirth: '1987-12-31',
      location: 'Italy',
    },
    {
      id: 9,
      firstname: 'Rayan',
      lastname: 'Sweid',
      dateofbirth: '2004-06-27',
      location: 'Tyre',
    },
      ],
      deletedUsers: [],
    };
  },
  methods: {
    deleteUser(user) {
      const userIndex = this.users.findIndex((u) => u.id === user.id);
      if (userIndex !== -1) {
        const deletedUser = this.users.splice(userIndex, 1)[0];
        this.deletedUsers.push(deletedUser);
      }
    },
  },
};
</script>

<style scoped>
/* Component-specific styles go here */
</style>
