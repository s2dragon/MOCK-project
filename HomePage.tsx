import React, { useState } from 'react';
import './HomePage.css';
import bannerImage from './assets/download.jpg'; // Update the path to the provided banner image
import hot1 from './assets/images.jpg';
import hot2 from './assets/images.jpg';
import hot3 from './assets/images.jpg';
import hot4 from './assets/images.jpg';

const HomePage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    address: '',
  });

  const handleLogin = () => {
    console.log('Login data:', loginData);
    setIsLoginModalOpen(false);
  };

  const handleRegister = () => {
    console.log('Register data:', registerData);
    setIsRegisterModalOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const hotCategories = [
    { id: 1, name: 'Nhà mặt phố', image: hot1 },
    { id: 2, name: 'Chung cư cao cấp', image: hot2 },
    { id: 3, name: 'Đất nền dự án', image: hot3 },
    { id: 4, name: 'Biệt thự liền kề', image: hot4 },
  ];

  const suggestedAuctions = [
    { id: 1, image: 'image1.jpg', title: 'Nhà mới đẹp, rộng rãi', user: 'Quang 1234', date: '3/16/2025 10:08:00 PM' },
    { id: 2, image: 'download.png', title: 'Nhà mới đẹp, rộng rãi', user: 'Quang 1234', date: '3/17/2025 10:03:00 PM' },
    { id: 3, image: 'download.png', title: 'Nhà mới đẹp, rộng rãi', user: 'Linh', date: '3/11/2024 7:42:00 PM' },
    { id: 4, image: 'download.png', title: 'Nhà mới đẹp, rộng rãi', user: 'Linh', date: '3/13/2024 10:14:00 AM' },
  ];

  const newAuctions = [
    { id: 1, image: 'image2.jpg', title: 'Nhà mới đẹp, rộng rãi', user: 'Linh', date: '3/18/2025 11:00:00 AM', price: '100,000.0₫ - 100,000,000.0₫', participants: 1 },
    { id: 2, image: 'image3.jpg', title: 'Nhà mới đẹp, rộng rãi', user: 'Quang 1234', date: '3/19/2025 02:00:00 PM', price: '100,000.0₫ - 100,000,000.0₫', participants: 2 },
  ];

  const openLoginModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the closeModals event
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the closeModals event
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="homepage-container" onClick={closeModals}>
      <header className="header">
        <div className="logo">F4 LAND</div>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm theo phiên đấu giá và chủ phiên" />
          <button>Search</button>
        </div>
        <div className="user-info">
          <button onClick={(e) => openLoginModal(e)}>Đăng nhập</button>
          <button onClick={(e) => openRegisterModal(e)}>Đăng ký</button>
        </div>
      </header>
      <nav className="navigation">
        <a href="#">Nhà riêng</a>
        <a href="#">Nhà mặt phố</a>
        <a href="#">Nhà chung cư</a>
        <a href="#">Nhà biệt thự liền kề</a>
        <a href="#">Đất</a>
        <a href="#">Đất nền dự án</a>
        <a href="#">Cửa hàng, ki ốt</a>
        <a href="#">Đất công nghiệp</a>
      </nav>
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>
      <section className="hot-categories">
        <h2>Danh mục bất động sản đang hot</h2>
        <div className="hot-category-items">
          {hotCategories.map((category) => (
            <div className="hot-category-item" key={category.id}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <main className="main-content">
        <section className="auction-suggestions">
          <h2>Phiên đấu giá gợi ý</h2>
          <div className="auction-items">
            {suggestedAuctions.map((auction) => (
              <div className="auction-item" key={auction.id}>
                <img src={auction.image} alt={auction.title} />
                <div className="item-info">
                  <h3>{auction.title}</h3>
                  <p>Người đăng: {auction.user}</p>
                  <p>{auction.date}</p>
                  <button>Chi tiết</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="new-auctions">
          <h2>Phiên đấu giá mới đăng</h2>
          <div className="auction-items">
            {newAuctions.map((auction) => (
              <div className="auction-item" key={auction.id}>
                <img src={auction.image} alt={auction.title} />
                <div className="item-info">
                  <h3>{auction.title}</h3>
                  <p>By: {auction.user}</p>
                  <p>Thời gian đấu giá: {auction.date}</p>
                  <p>Giá: {auction.price}</p>
                  <p>Số lượng người tham gia: {auction.participants}</p>
                  <button>Chi tiết</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {isLoginModalOpen && (
        <div className="login-modal" onClick={(e) => e.stopPropagation()}>
          <div className="login-modal-content">
            <button className="close-modal-button" onClick={closeModals}>×</button>
            <h2>Chào mừng trở lại</h2>
            <p>Đăng nhập để xem tài khoản và gợi ý cá nhân.</p>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <button onClick={handleLogin}>Đăng nhập</button>
            <p>HOẶC</p>
            <p>Chưa có tài khoản? <a href="#" onClick={(e) => openRegisterModal(e)}>Đăng ký</a></p>
            <p>Quên mật khẩu? <a href="#">Quên mật khẩu</a></p>
          </div>
        </div>
      )}
      {isRegisterModalOpen && (
        <div className="register-modal" onClick={(e) => e.stopPropagation()}>
          <div className="register-modal-content">
            <button className="close-modal-button" onClick={closeModals}>×</button>
            <h2>Bắt đầu tạo tài khoản</h2>
            <p>Tạo tài khoản để thực hiện đấu giá nhanh chóng và dễ dàng.</p>
            <input
              type="text"
              placeholder="Họ và tên"
              value={registerData.name}
              onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Địa chỉ email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={registerData.phone}
              onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
            />
            <input
              type="date"
              placeholder="Ngày sinh"
              value={registerData.dob}
              onChange={(e) => setRegisterData({ ...registerData, dob: e.target.value })}
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              value={registerData.address}
              onChange={(e) => setRegisterData({ ...registerData, address: e.target.value })}
            />
            <button onClick={handleRegister}>Đăng ký</button>
            <p>HOẶC</p>
            <p>Đã có tài khoản? <a href="#" onClick={(e) => openLoginModal(e)}>Đăng nhập</a></p>
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Về chúng tôi</h3>
            <p><a href="#">Thông tin</a></p>
            <p><a href="#">Liên hệ</a></p>
            <p><a href="#">Sự nghiệp</a></p>
          </div>
          <div className="footer-section">
            <h3>Dịch vụ</h3>
            <p><a href="#">Nhà riêng</a></p>
            <p><a href="#">Chung cư</a></p>
            <p><a href="#">Ki-ốt</a></p>
          </div>
          <div className="footer-section">
            <h3>Danh mục</h3>
            <p><a href="#">Nhà mặt phố</a></p>
            <p><a href="#">Đất nền dự án</a></p>
            <p><a href="#">Biệt thự</a></p>
          </div>
          <div className="footer-section">
            <h3>Đăng ký nhận tin</h3>
            <p>Nhận thông tin mới nhất từ chúng tôi:</p>
            <input type="email" placeholder="Nhập email của bạn" />
            <button>Đăng ký</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 1986-2024 F4Land, LLC. Đã đăng ký Bản quyền.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;