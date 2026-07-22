import apiClient from "./client";
import { API_ENDPOINTS } from "./endpoints";

/**
 * ===============================
 * Upload Response
 * ===============================
 */

export interface UploadResponse{
  url: string;
  publicId?: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
}

/**
 * ===============================
 * Upload API
 * ===============================
 */

export const uploadApi = {
  /**
   * Upload Single Image
   */
  uploadImage(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    return apiClient.post<UploadResponse>(
      API_ENDPOINTS.UPLOAD.IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  /**
   * Upload Single File
   */
  uploadFile(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    return apiClient.post<UploadResponse>(
      API_ENDPOINTS.UPLOAD.FILE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },

  /**
   * Upload Multiple Files
   */
  uploadMultiple(files: File[]) {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    return apiClient.post<UploadResponse[]>(
      API_ENDPOINTS.UPLOAD.MULTIPLE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};

export default uploadApi;