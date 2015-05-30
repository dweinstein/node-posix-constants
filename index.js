
module.exports = {
  stat: {
    S_IFMT   :  0170000,   //bit mask for the file type bit fields
    S_IFSOCK :  0140000,   //socket
    S_IFLNK  :  0120000,   //symbolic link
    S_IFREG  :  0100000,   //regular file
    S_IFBLK  :  0060000,   //block device
    S_IFDIR  :  0040000,   //directory
    S_IFCHR  :  0020000,   //character device
    S_IFIFO  :  0010000   //FIFO
  },
  errno: {
    EPERM   : 1,       // Operation not permitted
    ENOENT  : 2,       // No such file or directory
    ESRCH   : 3,       // No such process
    EINTR   : 4,       // Interrupted system call
    EIO     : 5,       // Input/output error
    ENXIO   : 6,       // Device not configured
    E2BIG   : 7,       // Argument list too long
    ENOEXEC : 8,       // Exec format error
    EBADF   : 9,       // Bad file descriptor
    ECHILD  : 10,      // No child processes
    EDEADLK : 11,      // Resource deadlock avoided
    ENOMEM  : 12,      // Cannot allocate memory
    EACCES  : 13,      // Permission denied
    EFAULT  : 14,      // Bad address
    EBUSY   : 16,      // Device / Resource busy
    EEXIST  : 17,      // File exists
    EXDEV   : 18,      // Cross-device link
    ENODEV  : 19,      // Operation not supported by device
    ENOTDIR : 20,      // Not a directory
    EISDIR  : 21,      // Is a directory
    EINVAL  : 22,      // Invalid argument
    ENFILE  : 23,      // Too many open files in system
    EMFILE  : 24,      // Too many open files
    ENOTTY  : 25,      // Inappropriate ioctl for device
    ETXTBSY : 26,      // Text file busy
    EFBIG   : 27,      // File too large
    ENOSPC  : 28,      // No space left on device
    ESPIPE  : 29,      // Illegal seek
    EROFS   : 30,      // Read-only file system
    EMLINK  : 31,      // Too many links
    EPIPE   : 32,      // Broken pipe
    ELOOP   : 62,      // Too many levels of symbolic links
    ENAMETOOLONG : 63, // File name too long
    ECANCELED : 89     // Operation canceled
  }
};
