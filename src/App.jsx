import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ User Pages
import Home from './Home';
import About from './About';
import Services from './Services';
import Menu from './Menu';
import Contact from './Contact';
import Reservation from './Reservation';
import Testimonial from './Testimonial';

// ✅ Admin Pages
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Bookings from './admin/Bookings';
import Analytics from './admin/Analytics';
import Export from './admin/Export';
import Users from './admin/Users';
import ProtectedRoute from './admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* 🌐 Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
     
        <Route path="/pages/Reservation" element={<Reservation />} />
        <Route path="/pages/Testimonial" element={<Testimonial />} />

        {/* 🔐 Admin Routes */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/export"
          element={
            <ProtectedRoute>
              <Export />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
