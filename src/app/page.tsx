// "use client";
// // /** @jsxImportSource @reactjs/react-next */
// // import { useClient } from '@reactjs/react-next';
// // import { useClient } from '@reactjs/react-next';
// import { useRouter } from 'next/navigation'; // Import useRouter instead of useNavigation
// import Login from './components/Login';
// import SignUp from './signup/page';
// import Layout from './Laayout/Layout';
// import { Provider } from 'react-redux';
// // import store from '../store';
// // import  store  from './store';
// // import store from './store/store';
// import store from './redux_component/store';

// const MyPage = () => {
//   // useClient();

  

//   return (
    
//     // <Provider store={store}>
//       <Layout>
//         <Login></Login>
//       </Layout>
//       // </Provider>
  
//   );
// };

// export default MyPage;

"use client"; // Commenting this out as it's not recognized
import { useRouter } from 'next/navigation';
import Login from './components/Login';
import SignUp from './signup/page';
import Layout from './Laayout/Layout';
import { Provider } from 'react-redux';
import store from './redux_component/store';
import website from './website/page'
import withAuth from './HOC/withAuth';

const MyPage = () => {
  // Assuming you want to use useRouter, otherwise, you can remove this line
  // useRouter();

  return (
    <Provider store={store}>
      <Layout>
        {/* Include your other components here */}
        <Login />
        {/* <SignUp /> */}
        {/* <withAuth /> */}
      </Layout>
      
    </Provider>
  );
};

export default MyPage;
