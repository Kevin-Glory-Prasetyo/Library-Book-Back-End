-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2025 at 04:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `data_buku`
--

CREATE TABLE `data_buku` (
  `id_buku` int(11) NOT NULL,
  `judul_buku` varchar(100) NOT NULL,
  `penulis_buku` varchar(100) NOT NULL,
  `kategori_buku` varchar(100) NOT NULL,
  `penerbit_buku` varchar(100) NOT NULL,
  `stok_buku` int(11) NOT NULL,
  `gambar_buku` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_buku`
--

INSERT INTO `data_buku` (`id_buku`, `judul_buku`, `penulis_buku`, `kategori_buku`, `penerbit_buku`, `stok_buku`, `gambar_buku`) VALUES
(1, 'Laskar Pelangi', 'Andrea Hirata', 'Fiksi', 'Bentang Pustaka', 15, 'https://upload.wikimedia.org/wikipedia/id/4/4b/Laskar_Pelangi_sampul.jpg'),
(2, 'Bumi Manusia', 'Pramoedya Ananta Toer', 'Sejarah', 'Lentera Dipantara', 10, 'https://upload.wikimedia.org/wikipedia/id/5/5f/Bumi_Manusia_sampul.jpg'),
(3, 'Filosofi Teras', 'Henry Manampiring', 'Pengembangan Diri', 'Kompas Gramedia', 25, 'https://images-na.ssl-images-amazon.com/images/I/71QZ7xJzVbL.jpg'),
(4, 'Negeri 5 Menara', 'Ahmad Fuadi', 'Fiksi', 'Gramedia Pustaka Utama', 20, 'https://upload.wikimedia.org/wikipedia/id/2/25/Negeri_5_Menara.jpg'),
(5, 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', 'Bisnis', 'Warner Books', 30, 'https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `data_peminjaman`
--

CREATE TABLE `data_peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `id_buku` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `tanggal_pinjam` datetime NOT NULL,
  `tanggal_kembali` datetime NOT NULL,
  `tanggal_pengembalian` datetime NOT NULL,
  `status_peminjaman` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_peminjaman`
--

INSERT INTO `data_peminjaman` (`id_peminjaman`, `id_buku`, `id_user`, `tanggal_pinjam`, `tanggal_kembali`, `tanggal_pengembalian`, `status_peminjaman`) VALUES
(1, 2, 2, '2025-11-03 10:09:42', '2025-11-10 10:09:43', '2025-11-08 10:09:43', 'Dikembalikan');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `role` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `role`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'user', 'Vicky', 'Yohanes', '123@gmail.com', '$2b$10$voNuVrNfU6GLqRbM0To5AuxF1kupNJ2osdBP7eSvHJffpfBlY7Bde'),
(2, 'user', 'Vickky', 'Vickky', '1234@gmail.com', '$2b$10$4LnTd24fN.KfNUS6F6zZyuLUSGAPQWKYci942QEMe6fGqU4qjlhoW'),
(4, 'admin', 'admin', 'pertama', 'admin123@gmail.com', '$2b$10$DAWhMuS0VOAqaC.bJT9grucGVH/B587tBehoLOWeCa1/NabtMC2Ze'),
(5, 'user', 'yosua', 'putra', 'yosua@gmail.com', '$2b$10$/bpWeFliXDoHSR1y1Dof0.BFgb6RzBDiInunZ7Xk72dazh1loaZgK');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `data_buku`
--
ALTER TABLE `data_buku`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `data_peminjaman`
--
ALTER TABLE `data_peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
