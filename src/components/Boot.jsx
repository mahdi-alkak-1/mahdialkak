import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function Boot() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="boot" exit={{ opacity: 0 }} transition={{ duration: 0.42 }}>
          <div className="boot-mark">MA//OS</div>
          <div className="boot-line"><span /></div>
          <div className="boot-copy">INITIALIZING DEVELOPER PROFILE</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
