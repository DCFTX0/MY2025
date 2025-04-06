      - name: Download and Upload raw Worker to Cloudflare
        run: |
          wget -O origin.js https://raw.githubusercontent.com/bia-pain-bache/BPB-Worker-Panel/refs/heads/main/build/unobfuscated-worker.js

          curl -X PUT "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/workers/scripts/YOUR_SCRIPT_NAME" \
          -H "Authorization: Bearer ${{ secrets.CLOUDFLARE_API_TOKEN }}" \
          -F "script=@origin.js"
