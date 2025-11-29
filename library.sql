-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2025 at 06:39 AM
-- Server version: 8.0.40
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id_kategori` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id_kategori`, `name`) VALUES
(1, 'Teknologi'),
(2, 'Novel'),
(3, 'Pendidikan'),
(4, 'Bisnis'),
(5, 'Sejarah');

-- --------------------------------------------------------

--
-- Table structure for table `data_buku`
--

CREATE TABLE `data_buku` (
  `id_buku` int NOT NULL,
  `judul_buku` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `penulis_buku` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `id_kategori` int DEFAULT NULL,
  `penerbit_buku` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `tahun_terbit` int DEFAULT NULL,
  `deskripsi_buku` text COLLATE utf8mb4_general_ci,
  `total_stock` int NOT NULL,
  `available_stock` int NOT NULL,
  `gambar_buku` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_buku`
--

INSERT INTO `data_buku` (`id_buku`, `judul_buku`, `penulis_buku`, `id_kategori`, `penerbit_buku`, `tahun_terbit`, `deskripsi_buku`, `total_stock`, `available_stock`, `gambar_buku`) VALUES
(22, 'Pemrograman Web Modern dengan JavaScript', 'Andi Pratama', 1, 'Informatika Press', 2021, 'Pemrograman Web Modern dengan JavaScript adalah panduan lengkap dan mendalam bagi siapa saja yang ingin menguasai fondasi hingga praktik lanjutan dalam pengembangan web menggunakan JavaScript—bahasa pemrograman yang menjadi jantung dari aplikasi web masa kini. Buku ini dirancang tidak hanya untuk pemula yang baru mengenal dunia web, tetapi juga bagi developer tingkat menengah yang ingin memperbarui pengetahuan mereka sesuai standar teknologi modern.', 10, 9, '/uploads/1763746148259-623926401.jpg'),
(23, 'Kecerdasan Buatan untuk Pemula', 'Dewi Kusuma', 1, 'TeknoMedia', 2020, 'Kecerdasan Buatan untuk Pemula adalah panduan komprehensif yang dirancang sebagai pintu masuk ideal bagi siapa pun yang ingin memahami konsep dasar hingga gambaran luas tentang teknologi kecerdasan buatan (Artificial Intelligence/AI). Ditulis dengan bahasa yang sederhana, sistematis, dan bebas jargon teknis, buku ini bertujuan membantu pembaca mengenal AI tanpa merasa kewalahan oleh istilah yang rumit.', 15, 15, '/uploads/1763746200105-642261449.jpg'),
(24, 'Belajar Python dalam 7 Hari', 'Herman Wijaya', 3, 'Code Academy', 2023, 'Belajar Python dalam 7 Hari adalah panduan komprehensif dan praktis yang dirancang untuk membantu pembaca memahami dasar-dasar pemrograman Python dalam waktu singkat namun tetap efektif. Buku ini dibuat khusus untuk pemula yang ingin belajar dari nol, mahasiswa yang membutuhkan referensi belajar cepat, hingga profesional yang ingin memperluas keterampilan teknis mereka di dunia pemrograman modern.', 25, 25, '/uploads/1763746287944-243931892.jpg'),
(25, 'Sistem Basis Data Modern', 'Siti Rahmawati', 4, 'DataPress', 2019, 'Sistem Basis Data Modern adalah buku komprehensif yang dirancang untuk memberikan pemahaman mendalam tentang konsep, arsitektur, dan teknologi basis data generasi terbaru. Buku ini menggabungkan teori fundamental yang menjadi landasan sistem basis data dengan perkembangan teknologi modern seperti NoSQL, distributed databases, cloud database, hingga pemrosesan data berskala besar. Dengan penyampaian yang jelas dan aplikatif, buku ini sangat cocok untuk mahasiswa, praktisi IT, maupun pengembang yang ingin memperkuat kompetensi di bidang manajemen data.', 20, 0, '/uploads/1763746339590-884905156.jpg'),
(26, 'Cloud Computing dan Arsitektur Sistem', 'Bagus Santoso', 4, 'TeknoGlobal', 2025, 'Cloud Computing dan Arsitektur Sistem adalah buku komprehensif yang memberikan pemahaman mendalam tentang konsep, teknologi, dan praktik terbaik dalam membangun sistem modern berbasis komputasi awan. Ditulis dengan pendekatan yang sistematis dan mudah diikuti, buku ini sangat cocok untuk mahasiswa, pengembang perangkat lunak, admin sistem, hingga profesional IT yang ingin memahami cara kerja cloud dan bagaimana merancang arsitektur sistem yang scalable, aman, dan efisien.', 7, 7, '/uploads/1763746537148-761730447.jpg'),
(27, 'Psikologi Pendidikan untuk Guru', 'Rizky Mawardi', 3, 'Pustaka Pendidikan', 2025, 'Psikologi Pendidikan untuk Guru adalah sebuah buku komprehensif yang dirancang khusus untuk membantu para pendidik memahami proses belajar serta perkembangan peserta didik secara mendalam. Buku ini menggabungkan teori-teori psikologi modern dengan praktik pembelajaran di kelas, sehingga guru mampu mengambil keputusan pedagogis yang tepat berdasarkan pemahaman ilmiah tentang perilaku dan kebutuhan siswa.', 18, 18, '/uploads/1763746667106-95237640.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `data_peminjaman`
--

CREATE TABLE `data_peminjaman` (
  `id_peminjaman` int NOT NULL,
  `id_buku` int NOT NULL,
  `id_user` int NOT NULL,
  `tanggal_pinjam` date NOT NULL,
  `tanggal_kembali` date NOT NULL,
  `tanggal_pengembalian` datetime DEFAULT NULL,
  `status_peminjaman` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `status_pengembalian` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_peminjaman`
--

INSERT INTO `data_peminjaman` (`id_peminjaman`, `id_buku`, `id_user`, `tanggal_pinjam`, `tanggal_kembali`, `tanggal_pengembalian`, `status_peminjaman`, `status_pengembalian`) VALUES
(2, 23, 5, '2025-11-22', '2025-11-29', '2025-11-23 21:36:55', 'selesai', 'tepat waktu'),
(3, 24, 5, '2025-11-23', '2025-11-30', '2025-11-23 21:36:19', 'selesai', 'tepat waktu'),
(4, 26, 5, '2025-11-23', '2025-11-30', '2025-11-23 21:34:27', 'selesai', 'tepat waktu'),
(5, 22, 5, '2025-11-02', '2025-11-09', '2025-11-23 21:39:36', 'selesai', 'terlambat'),
(6, 22, 5, '2025-11-23', '2025-11-30', '2025-11-23 21:50:50', 'selesai', 'tepat waktu'),
(7, 24, 5, '2025-11-23', '2025-11-30', '2025-11-23 21:54:01', 'selesai', 'tepat waktu'),
(8, 22, 12, '2025-11-27', '2025-12-04', NULL, 'menunggu', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `role`, `first_name`, `last_name`, `email`, `password`, `photo`) VALUES
(1, 'user', 'Vicky', 'Yohanes', '123@gmail.com', '$2b$10$voNuVrNfU6GLqRbM0To5AuxF1kupNJ2osdBP7eSvHJffpfBlY7Bde', NULL),
(2, 'user', 'Vickky', 'Vickky', '1234@gmail.com', '$2b$10$4LnTd24fN.KfNUS6F6zZyuLUSGAPQWKYci942QEMe6fGqU4qjlhoW', NULL),
(5, 'user', 'yosua', 'putra', 'yosua@gmail.com', '$2b$10$/bpWeFliXDoHSR1y1Dof0.BFgb6RzBDiInunZ7Xk72dazh1loaZgK', NULL),
(9, 'admin', 'Vicky', 'Setiawan', 'vicky@com', '$2b$10$esTyjK3twYNqt4rp1.HeL./TcpudNSlfbncEPoLu5hGGaxnSPzRVS', NULL),
(11, 'user', 'user', 'satu', 'user@gmail.com', '$2b$10$CkoyvJO6h./7H145/u7sru90UEFmwrco9bXTWs3lMoJ30RWS7zK1y', NULL),
(12, 'user', 'Kevin', 'Edit Pertama', 'acer@gmail.com', '$2b$10$1KCB9V8gb2GUhWNzpPUxlekqCoJcRG7F.cutxVn/t/De2eSiSmky2', '1764236679406-840687144.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `data_buku`
--
ALTER TABLE `data_buku`
  ADD PRIMARY KEY (`id_buku`);

--
-- Indexes for table `data_peminjaman`
--
ALTER TABLE `data_peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_kategori` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `data_buku`
--
ALTER TABLE `data_buku`
  MODIFY `id_buku` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `data_peminjaman`
--
ALTER TABLE `data_peminjaman`
  MODIFY `id_peminjaman` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
