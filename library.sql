-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 01, 2025 at 02:50 AM
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
(5, 'Sejarah'),
(6, 'Comic '),
(7, 'Motivation');

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
(29, 'Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa', 'James Clear', 7, 'Gramedia Pustaka Utama', 2019, 'Dalam buku terobosan ini, Clear pada hakikatnya mengungkapkan bagaimana perubahan-perubahan sangat remeh ini dapat tumbuh menjadi hasil-hasil yang sangat mengubah hidup. Ia menyingkap beberapa trik sederhana dalam hidup kita (seni Menumpuk Kebiasaan yang terlupakan, kekuatan tak terduga Aturan Dua Menit, atau trik untuk masuk ke dalam Zona Goldilocks), dan menggali ke dalam teori psikologi dan neurosains paling baru untuk menerangkan mengapa semua itu penting. Dalam rangka itu, ia menceritakan kisah-kisah inspiratif para peraih medali emas Olimpiade, para CEO terkemuka, dan ilmuwan-ilmuwan istimewa yang telah menggunakan sains tentang kebiasaan-kebiasaan kecil untuk tetap produktif, tetap termotivasi, dan bahagia.', 0, 0, '/uploads/1764555629692-900995663.jpg'),
(30, '212 Tip & Trik Exel 2010', 'Hengky Alexander Mangkulo', 1, 'Elex Media Komputindo', 2013, ' Di sini Anda akan menjumpai 212 tip dan trik menarik dalam penggunaan Microsoft Excel 2010. Tip dan trik yang dibahas meliputi hal-hal yang berhubungan dengan aplikasi Excel, worksheet, workbook, cell dan range, formula, fungsi, format, kondisi, gambar, shapes, tabel, chart, import data, dan sekuriti atau pengaturan keamanan.  Tip dan trik yang diberikan ini akan menambah wawasan dan meningkatkan kemampuan Anda dalam menggunakan Microsoft Excel 2010.  Pembahasan dilakukan secara sederhana, tetapi membahas hampir semua aspek penting dalam penggunaan Microsoft Excel 2010. Langkah-langkah yang diberikan dibuat agar mudah diikuti dan diaplikasikan.', 5, 5, '/uploads/1764555979241-733180441.jpg'),
(31, 'Bibi Gill', 'Tere Liye ', 2, 'PENERBIT SABAK GRIP', 2022, 'Sejak kecil, hidupnya adalah tragedi! Lahir di tempat yang hanya mengenal matahari 24 jam, sisanya gelap. Kehilangan seluruh orang-orang yang disayanginya, orang tua, adik-kakak, sahabat sejati, pasangan, anak, berkali-kali. Gelap. Hitam. Dua sisi mengerikan. Bagaimana dia menebus semuanya? Bagaimana dia bisa menjadi petarung terkuat yang pernah ada. Sekali dia melepas teknik beku itu, bahkan ceros, Si Tanpa Mahkota, bukan lawan setaranya.  Bagaimana menjadi petarung terkuat di dunia paralel? Dengan latihan panjang dan pengorbanan. Termasuk kehilangan dan kesedihan. Inilah kisah tentang Bibi Gill, yang sejak kecil berusaha mengalahkan \'monster\' dalam hidupnya.', 10, 10, '/uploads/1764556315950-213106563.png'),
(32, '100 Fakta Yang Mencerdaskan Anda', 'Xavier Quentin Pranata', 3, 'Andi Publisher', 2020, 'Apa yang Anda ketahui tentang kopi? Tahukah Anda bila kopi bias mengurangi risiko Diabetes hingga 50%? Juga, tahukah Anda jika telur puyuh baik untuk kesehatan? Selama ini telur puyuh dianggap memiliki kolesterol tinggi. Ternyata, telur puyuh tidak memiliki kolesterol jahat (LDL) dan sangat kaya dengan kolesterol baik (HDL). Siapa juga yang menyangka bila petai – yang sering dihindari – justru memiliki kandungan nutrisi lebih tinggi dari apel? Dan setujukah Anda bila pasta gigi juga punya banyak manfaat? Kita sering tidak tahu – atau menyadari, bahwa ada banyak manfaat di balik produk yang kita konsumsi sehari-hari. Mulai dari produk makanan, minuman, hingga pelengkap yang lain. Ternyata, bila digunakan dengan benar, banyak produk yang bermanfaat bagi kesehatan. Buku ini mengupas 100 fakta unik di sekitar kita, yang mencengangkan sekaligus mencerdaskan karena menambah wawasan kita.Tak hanya fakta di balik produk konsumsi, tetapi juga fakta mengenai tubuh kita, mengenai lingkungan, mengenai gaya hidup, cara mudah untuk sehat, dan sebagainya. Membaca buku ini, akan membuat pengetahuan Anda bertambah dan diharapkan gaya hidup Anda akan lebih sehat dan berkualitas.', 4, 4, '/uploads/1764556425101-607458840.jpg'),
(33, '#MulaidariETF: Investasi Reksa Dana ETF (Efisien, Transparan, Fleksibel)', 'Ignatius Denny Wicaksono & Tim PT Bursa Efek Indonesia', 4, 'Elex Media Komputindo', 2021, 'ETF atau Exchange Traded Fund, sepertinya masih cukup asing di telinga kita. Sayang, produk yang sangat menarik dan cocok bagi investor baik pemula maupun profesional ini belum dikenal oleh masyarakat luas. Padahal di Pasar Modal yang telah maju, seperti Amerika, ETF sudah menjadi instrumen primadona untuk investasi pasif atau investasi berbasis indeks.  Sebagaimana perumpamaan “tak kenal maka tak sayang”, sebelum memutuskan untuk berinvestasi ETF, kita perlu mengenali apa itu ETF dan pilihan investasi ETF yang tersedia, dan kesesuaian dengan profil risiko dan investasi investor.  Dalam buku ini, kita akan memahami ETF secara menyeluruh, mulai dari melihat perbedaan antara investasi pasif dan investasi aktif, mempelajari indeks dan cara melakukan investasi pasif, mengenal lebih dalam ETF, sampai dengan cara memilih dan melakukan evaluasi kinerja ETF. Cukup lengkap dari sisi teori dan aplikasi, sehingga secara praktis dapat langsung diterapkan oleh investor untuk memulai perjalanan investasi ETF-nya.', 7, 7, '/uploads/1764556504594-465093953.jpg'),
(34, 'An African History of Africa', 'Zeinab Badawi', 5, 'Harper Collins', 2025, 'Selama berabad-abad, sejarah benua ini sering ditulis oleh orang luar (penjajah Eropa) yang kerap menggambarkan Afrika sebagai benua tanpa sejarah, \"gelap\", atau biadab sebelum kedatangan orang kulit putih. Badawi menantang stereotip ini dengan menempatkan orang Afrika kembali sebagai pusat dari cerita mereka sendiri.', 3, 3, '/uploads/1764556699443-460601997.jpg'),
(35, 'NARUTO 13', 'Masashi Kishimoto', 6, 'Elex Media Komputindo', 2005, 'Akhirnya, orang itu datang juga! Bersama Kakashi, Sasuke muncul di arena ujian!! Pertarungan melawan Gaora yang melepaskan nafsu membunuh mengerikan yang telah ditahannya sampai saat ini, merupakan sesuatu yang tak bisa dihindari!! Apa benar Sasuke berhasil menembus pertahanan Gaora dengan gerakan super cepat itu!?', 10, 10, '/uploads/1764556806298-602784824.jpg'),
(36, '#SELOWAJA', ' Bryan E. Robinson, Ph.D.', 7, 'Elex Media Komputindo', 2021, 'Saatnya untuk berhenti berbuat curang dalam hidupmu. Apakah kamu perlu mengurangi pekerjaan, menjadi lebih penuh perhatian, atau keduanya. Psikoterapis dan mantan pecandu kerja Bryan E Robinson, Ph.D., akan membantumu mengintegrasikan keseimbangan kerja atau kehidupan untuk menemukan titik manis di mana rasa santai itu mungkin terjadi—dan dalam kekuatanmu.  Siklus kecanduan kerja 24/7 bisa sulit untuk diputus, tetapi ini hanya masalah membingkai ulang prioritas dan melatih perhatian. Bersantai bukan sesuatu yang Anda lakukan. Ini adalah pola pikir—cara berada di dunia. Meskipun mudah untuk berfokus pada apa yang salah, Anda dapat menghemat banyak waktu dan stres dengan mempelajari cara memperlambat.  Manifes bulan-ke-bulan untuk menangani pekerjaan yang berlebihan, #SELOWAJA berisi meditasi harian sepanjang tahun, latihan praktis yang menenangkan, sepuluh perintah perawatan diri, dan nasihat profesional oleh seorang pakar mindfulness terkemuka. Ini adalah panduan utama untuk menemukan waktu bersantai dan hidup yang lebih baik. Jadi ambillah #Bernapas-dan #SelowAja!', 5, 5, '/uploads/1764556923407-703568620.jpg');

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
(8, 22, 12, '2025-11-27', '2025-12-04', NULL, 'menunggu', NULL),
(9, 23, 13, '2025-11-30', '2025-12-07', NULL, 'menunggu', NULL),
(10, 23, 14, '2025-12-01', '2025-12-08', '2025-12-01 08:48:27', 'selesai', 'tepat waktu');

-- --------------------------------------------------------

--
-- Table structure for table `favorit`
--

CREATE TABLE `favorit` (
  `id_favorit` int NOT NULL,
  `id_user` int NOT NULL,
  `id_buku` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorit`
--

INSERT INTO `favorit` (`id_favorit`, `id_user`, `id_buku`, `created_at`) VALUES
(8, 15, 30, '2025-12-01 02:48:50');

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
(9, 'admin', 'Vicky', 'Setiawan', 'vicky@com', '$2b$10$esTyjK3twYNqt4rp1.HeL./TcpudNSlfbncEPoLu5hGGaxnSPzRVS', NULL),
(15, 'user', 'Testing', 'Glory Prasetyo', 'kevinprasetyo817@gmail.com', '$2b$10$p4pDDMPHEmKAnA2nSROcXuDp2HnFz9deE.ezdv/y9h.F0NMc.Cl.u', '1764556986968-242166409.jpg');

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
-- Indexes for table `favorit`
--
ALTER TABLE `favorit`
  ADD PRIMARY KEY (`id_favorit`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_buku` (`id_buku`);

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
  MODIFY `id_kategori` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `data_buku`
--
ALTER TABLE `data_buku`
  MODIFY `id_buku` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `data_peminjaman`
--
ALTER TABLE `data_peminjaman`
  MODIFY `id_peminjaman` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `favorit`
--
ALTER TABLE `favorit`
  MODIFY `id_favorit` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorit`
--
ALTER TABLE `favorit`
  ADD CONSTRAINT `favorit_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE,
  ADD CONSTRAINT `favorit_ibfk_2` FOREIGN KEY (`id_buku`) REFERENCES `data_buku` (`id_buku`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
