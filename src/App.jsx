import { Route, Routes } from 'react-router-dom';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import MyListingsPage from './pages/MyListingsPage';
import PostItemPage from './pages/PostItemPage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/items" element={<Feed />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-listings" element={<MyListingsPage />} />
        <Route path="/post-item" element={<PostItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
