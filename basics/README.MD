# Git Cheat Sheet - Hướng dẫn Git toàn diện

## 🔧 Cấu hình Git

### Cấu hình thông tin cá nhân

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
```

### Kiểm tra cấu hình

```bash
git config --global --list    # Xem cấu hình global
git config --local --list     # Xem cấu hình local (repo hiện tại)
git config --system --list    # Xem cấu hình system
```

## 🚀 Khởi tạo Repository

```bash
git init                      # Khởi tạo repo mới
git clone <url>              # Clone repo từ remote
git clone <url> <tên_thư_mục> # Clone vào thư mục cụ thể
```

## 📊 Kiểm tra trạng thái

```bash
git status                   # Kiểm tra trạng thái file
git status -s               # Hiển thị ngắn gọn
git diff                    # So sánh thay đổi chưa staged
git diff --staged           # So sánh thay đổi đã staged
git diff HEAD               # So sánh với commit cuối
```

## ➕ Staging Area

```bash
git add <tên_file>          # Thêm file cụ thể
git add .                   # Thêm tất cả file trong thư mục hiện tại
git add -A                  # Thêm tất cả file (bao gồm deleted)
git add *.js               # Thêm tất cả file .js
git restore --staged <file> # Bỏ file khỏi staging area
```

## 💾 Commit

```bash
git commit -m "message"     # Commit với message
git commit -am "message"    # Add và commit cùng lúc
git commit --amend         # Sửa commit cuối
git commit --amend -m "new message" # Sửa message commit cuối
```

## 🌐 Remote Repository

### Quản lý remote

```bash
git remote -v              # Xem danh sách remote
git remote add origin <url> # Thêm remote origin
git remote remove origin   # Xóa remote origin
git remote rename origin upstream # Đổi tên remote
```

### Push và Pull

```bash
git push origin <branch>    # Push lên remote
git push -u origin <branch> # Push và set upstream
git push --all             # Push tất cả branch
git pull                   # Pull từ remote (fetch + merge)
git pull origin <branch>   # Pull từ branch cụ thể
git fetch                  # Chỉ tải về, không merge
git fetch --all           # Fetch tất cả remote
```

## 🌳 Quản lý Branch

### Xem và tạo branch

```bash
git branch                 # Liệt kê branch local
git branch -a             # Liệt kê tất cả branch
git branch -r             # Liệt kê branch remote
git branch <tên_branch>   # Tạo branch mới
git checkout <branch>     # Chuyển branch
git checkout -b <branch>  # Tạo và chuyển branch
git switch <branch>       # Chuyển branch (Git 2.23+)
git switch -c <branch>    # Tạo và chuyển branch (Git 2.23+)
```

### Xóa branch

```bash
git branch -d <branch>    # Xóa branch đã merge
git branch -D <branch>    # Force xóa branch
git push origin --delete <branch> # Xóa branch trên remote
```

## 🔀 Merge và Rebase

### Cách hoạt động của Git Merge

Git merge tạo ra một commit merge mới để ghép lại lịch sử của cả hai nhánh. Khi thực hiện merge, Git sẽ:

Giữ nguyên toàn bộ lịch sử commit của cả hai nhánh

Tạo ra một commit merge đặc biệt làm "mối nối" giữa hai nhánh

Bảo toàn ngữ cảnh và thời gian commit ban đầu

### Cách hoạt động của Git Rebase

Git rebase viết lại lịch sử bằng cách đưa toàn bộ những commit mới từ nhánh nguồn nối tiếp vào "ngọn" của nhánh đích. Quá trình này sẽ:

Tạo ra những commit mới ứng với mỗi commit ban đầu của nhánh nguồn

Loại bỏ các commit merge không cần thiết

Tạo ra lịch sử commit có dạng tuyến tính, xuyên suốt từ đầu đến cuối project

### Khi nào nên sử dụng

Sử dụng Merge khi:

- Làm việc với team chưa quen Git

- Muốn bảo toàn đầy đủ lịch sử thời gian commit

- Cần merge nhiều nhánh cùng lúc

- Làm việc trên nhánh được chia sẻ với nhiều người

Sử dụng Rebase khi:

- Muốn lịch sử commit sạch sẽ và dễ theo dõi

- Làm việc trên nhánh cá nhân chưa được chia sẻ

- Team đã quen thuộc với Git

- Cần các thay đổi của mình luôn là mới nhất

```bash
git merge <branch>        # Merge branch vào branch hiện tại
git merge --no-ff <branch> # Merge tạo merge commit
git rebase <branch>       # Rebase branch hiện tại lên branch khác
git rebase -i HEAD~3      # Interactive rebase 3 commit cuối
```

## 📚 Lịch sử và Log

```bash
git log                   # Xem lịch sử commit
git log --oneline        # Hiển thị ngắn gọn
git log --graph          # Hiển thị dạng graph
git log --author="name"  # Lọc theo tác giả
git log --since="2 weeks ago" # Lọc theo thời gian
git log --grep="keyword" # Tìm kiếm trong commit message
git show <commit_hash>   # Xem chi tiết commit
```

## 💾 Stash (Lưu tạm thời)

```bash
git stash               # Lưu thay đổi tạm thời
git stash save "message" # Lưu với message
git stash list          # Xem danh sách stash
git stash pop           # Khôi phục stash cuối và xóa
git stash apply         # Khôi phục stash cuối nhưng không xóa
git stash drop          # Xóa stash cuối
git stash clear         # Xóa tất cả stash
```

## ↩️ Hoàn tác thay đổi

```bash
git restore <file>      # Hoàn tác thay đổi file
git restore --staged <file> # Bỏ file khỏi staging
git reset HEAD~1        # Undo commit cuối, giữ thay đổi
git reset --hard HEAD~1 # Undo commit cuối, xóa thay đổi
git revert <commit>     # Tạo commit mới hoàn tác commit cũ
```

## 🏷️ Tag

```bash
git tag                 # Liệt kê tag
git tag <tên_tag>      # Tạo lightweight tag
git tag -a <tên_tag> -m "message" # Tạo annotated tag
git push origin <tag>   # Push tag lên remote
git push origin --tags  # Push tất cả tag
```

## 🔐 Xác thực GitHub

### 1. Username/Password (deprecated)

- Không còn được hỗ trợ từ 2021

### 2. Personal Access Token (PAT)

```bash
# Sử dụng token như password khi push/pull
# Tạo tại: GitHub Settings > Developer settings > Personal access tokens
```

### 3. SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
# Copy public key và thêm vào GitHub Settings > SSH Keys
cat ~/.ssh/id_ed25519.pub
```

## 🛠️ Git Configuration Files

```bash
~/.gitconfig           # Global config
.git/config           # Local repo config
.gitignore            # Ignore patterns
.gitattributes        # File attributes
```

## 🎯 Workflow phổ biến

### Feature Branch Workflow

```bash
git checkout -b feature/new-feature
# Làm việc và commit
git push -u origin feature/new-feature
# Tạo Pull Request
git checkout main
git pull origin main
git branch -d feature/new-feature
```

### Gitflow Workflow

```bash
git checkout -b develop    # Branch phát triển chính
git checkout -b feature/xxx # Feature branch
git checkout -b release/v1.0 # Release branch
git checkout -b hotfix/bug  # Hotfix branch
```

## 🔍 Lệnh hữu ích khác

```bash
git blame <file>       # Xem ai sửa từng dòng
git clean -f          # Xóa untracked files
git clean -fd         # Xóa untracked files và folders
git cherry-pick <commit> # Apply commit từ branch khác
git reflog            # Xem lịch sử tất cả thay đổi
git bisect start      # Tìm commit gây bug
```

## 📝 Gợi ý học tiếp

1. **Git Hooks** - Tự động hóa workflow
2. **Git Submodules** - Quản lý project con
3. **Git LFS** - Quản lý file lớn
4. **Advanced Rebase** - Interactive rebase, squash commits
5. **Git Worktree** - Làm việc với nhiều branch cùng lúc
6. **Conventional Commits** - Chuẩn hóa commit message
7. **GitHub Actions/GitLab CI** - CI/CD integration
8. **Git Aliases** - Tạo shortcut cho lệnh dài

## 🎓 Resources để học thêm

- [Pro Git Book](https://git-scm.com/book) - Tài liệu chính thức
- [GitHub Skills](https://skills.github.com/) - Interactive learning
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Oh My Git!](https://ohmygit.org/) - Game học Git
- [Learn Git Branching](https://learngitbranching.js.org/) - Visualization tool
