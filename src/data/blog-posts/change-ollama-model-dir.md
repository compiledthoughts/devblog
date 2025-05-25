---
title: Change Default Directory for Ollama
slug: Change Default Directory for Ollama
publishDate: 25 May 2025
description: How to Change Default Directory for Ollama Models on Windows
---

By default, Ollama stores models in:
```cmd
C:\Users\<YourUsername>\.ollama\models
```

You can change this by setting the `OLLAMA_MODELS` environment variable.

---

## 🛠️ Steps

### 1. Choose a New Directory

Example:
```cmd
D:\Ollama\models
```

Create this folder if it doesn't already exist.

---

### 2. Set the Environment Variable

#### ✅ Temporary (Only for Current CMD Session)

Open Command Prompt and run:

```cmd
set OLLAMA_MODELS=D:\Ollama\models
ollama run llama3
```

This setting will reset once the terminal is closed.

---

#### ✅ Permanent (System-wide or User-wide)

1. Press **Win + S**, search for:  
   `"Environment Variables"`  
   Open **"Edit the system environment variables"**

2. In the **System Properties** dialog, click **"Environment Variables…"**

3. Under **User variables** (or **System variables**, for global scope), click **New...**  
   - **Variable name**: `OLLAMA_MODELS`  
   - **Variable value**: `D:\Ollama\models`

4. Click **OK** → **OK** → **OK** to close all dialogs.

5. **Restart your terminal, IDE, or PC** to apply changes.

---

### 📌 Notes

- The change affects only where **models** are stored.
- Other configuration files remain in the default `.ollama` directory.
- You can move existing models from the old directory to the new one to avoid re-downloading.

---

## ✅ Verification

Run this to confirm:
```cmd
ollama run llama3
```

Check that models are now saved in your new `OLLAMA_MODELS` path.
