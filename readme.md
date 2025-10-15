## Dokumentasi API

- **Base URL**: `https://alvan-test-javan.vercel.app`
- **Format Data**: `application/json`

---

### **1. Get All Users**

Mengambil semua data pengguna yang tersimpan di database.

- **Method**: `GET`
- **Endpoint**: `/users`
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Berhasil mendapatkan semua data user",
    "data": [
      {
        "_id": "68efa46da763b7fc5c8b4621",
        "user": "Alvan",
        "nophone": "087736527765",
        "createdAt": "2025-10-15T13:41:01.999Z",
        "updatedAt": "2025-10-15T13:41:01.999Z"
      }
    ]
  }
  ```

### **2. Get User By ID**

Mengambil data pengguna spesifik berdasarkan ID.

- **Method**: `GET`
- **Endpoint**: `/users/:id`
- ** Success Response (200 OK)**:
  ```json
  {
    "message": "Berhasil mendapatkan data user dengan ID 68efa46da763b7fc5c8b4621",
    "data": { "_id": "...", "user": "...", ... }
  }
  ```
- ** Error Response (404 Not Found)**:
  ```json
  { "message": "User dengan ID ... tidak ditemukan" }
  ```

### **3. Create New User**

Membuat pengguna baru.

- **Method**: `POST`
- **Endpoint**: `/users`
- **Request Body**:
  ```json
  {
    "user": "Nama Baru",
    "nophone": "081234567890"
  }
  ```
- ** Success Response (201 Created)**:
  ```json
  {
    "message": "User baru berhasil dibuat",
    "data": { "_id": "...", "user": "Nama Baru", ... }
  }
  ```

### **4. Update User By ID**

Memperbarui data pengguna yang sudah ada berdasarkan ID.

- **Method**: `PUT`
- **Endpoint**: `/users/:id`
- **Request Body** (sertakan hanya field yang ingin diubah):
  ```json
  {
    "nophone": "089876543210"
  }
  ```
- ** Success Response (200 OK)**:
  ```json
  {
    "message": "User dengan ID ... berhasil diperbarui",
    "data": { "_id": "...", "nophone": "089876543210", ... }
  }
  ```

### **5. Delete User By ID**

Menghapus data pengguna berdasarkan ID.

- **Method**: `DELETE`
- **Endpoint**: `/users/:id`
- ** Success Response (200 OK)**:
  ```json
  {
    "message": "User dengan nama '...' berhasil dihapus"
  }
  ```

---
