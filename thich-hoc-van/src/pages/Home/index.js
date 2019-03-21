import React from 'react';
import { Route } from 'react-router-dom';


const Home = () => (
  <div className="content">
    <div className="container-fluid">
        <div className="header"><h4>Trang chủ</h4></div>
        <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4 className="title">Giới thiệu</h4>
              
            </div>
            <div className="content all-icons">
            Những ai đã học qua về react js chắc hẳn sẽ biết rằng React.js chỉ là thư viện để tạo các Component và từ các Component đấy xây dựng thành view giao diện, đặc biệt ở đây là bản thân react js nó không có Router. Vì vậy, react router được sinh ra để giải quyết vấn đề này. 
            React-router được dùng để giúp việc dẫn hướng UI đồng bộ với URL. Để dễ hiểu hơn về react router, mình sẽ ví dụ như là bạn làm xong tất cả các chi tiết trong đồng hồ nhưng không có cách nào để lắp ghép các chi tiết để chiếc đồng hồ đó chạy được vậy. React-router chính là cách kết nối đó. Giúp các thành phần của react liên kết được với nhau. 
            Trong hướng dẫn này, mình sẽ xây dựng trang web. Tuy nhiên mình sẽ bỏ qua tất cả những điều cơ bản cần thiết để có được trang web và định tuyến lại chúng.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;