import Link from 'next/link'
import React from 'react'

function SharedFooter() {
  return (
    <footer className="text-sm text-textNotActive text-center my-6">
      Built by{' '}
      <Link
        href="https://t.me/HexGhost_JS"
        title="Synapse"
        target="_blank"
        className="underline font-bold"
      >
        Taha
      </Link>
      . The source code is available on{' '}
      <Link
        href="https://github.com/MohammadTahaBatoomi/Synapse"
        title="GitHub"
        target="_blank"
        className="underline font-bold"
      >
        GitHub
      </Link>
      .
    </footer>
  )
}

export default SharedFooter;
