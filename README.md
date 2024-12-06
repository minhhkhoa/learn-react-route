
Trong React Router, các thành phần Router, Routes, và Route đóng vai trò quan trọng trong việc định nghĩa và điều hướng giữa các trang trong ứng dụng React. Dưới đây là giải thích chi tiết từng thành phần:

1. Router
Là gì?
Router là thành phần bao bọc toàn bộ ứng dụng React, giúp ứng dụng hiểu rằng bạn đang sử dụng React Router để quản lý định tuyến (routing).
Nó chịu trách nhiệm theo dõi URL hiện tại và hiển thị các thành phần phù hợp.
Tác dụng
Quản lý lịch sử của trình duyệt để điều hướng giữa các trang mà không cần tải lại toàn bộ ứng dụng.
Phân biệt các URL để hiển thị đúng trang tương ứng.
Các loại Router:
BrowserRouter: Dùng với URL dạng chuẩn (ví dụ: /home).
HashRouter: Dùng với URL có ký hiệu # (ví dụ: /#/home).
Cách sử dụng:
BrowserRouter thường được dùng trong các ứng dụng React:
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            {/* Các tuyến đường sẽ nằm ở đây */}
        </BrowserRouter>
    );
}

2. Routes
Là gì?
Routes là một container chứa các tuyến đường (Route).
Nó đảm bảo chỉ có một Route phù hợp với URL hiện tại được hiển thị.
Tác dụng
Kiểm tra URL hiện tại và hiển thị đúng thành phần (component) tương ứng với URL đó.
Giúp định nghĩa cấu trúc các tuyến đường trong ứng dụng.

3. Route
Là gì?
Route định nghĩa từng tuyến đường cụ thể và xác định thành phần (component) nào sẽ được hiển thị khi người dùng truy cập URL đó.
Tác dụng
Liên kết một đường dẫn (path) với một thành phần (element).
Quản lý các tham số động trong URL (nếu có).
Cách sử dụng:
Định tuyến cơ bản:

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
Định tuyến động:

Khi cần truyền tham số qua URL:
<Routes>
    <Route path="/product/:id" element={<Product />} />
</Routes>
Lấy giá trị id trong thành phần <Product /> bằng useParams:
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    return <h1>Product ID: {id}</h1>;
};
Định tuyến lồng nhau (Nested Routes):

Dùng khi một trang có nhiều thành phần con.
<Routes>
    <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
    </Route>
</Routes>
