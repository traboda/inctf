"use client";

import { useState } from "react";

// Floating Contact Button Component with Web3Forms
const FloatingContactButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    issue: '',
    name: '',
    contactNumber: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fix: Add proper type for submitStatus
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const WEB3FORMS_ACCESS_KEY = '307d219e-605a-4a1a-bffc-4207b30a2fa0'; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', `
        Issue/Problem: ${formData.issue}
        Contact Number: ${formData.contactNumber || 'Not provided'}
      `);
      
      // Optional: Add subject line
      formDataToSend.append('subject', `New Enquiry from ${formData.name}`);
      
      // Optional: Add reply_to
      formDataToSend.append('replyto', formData.email);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setIsPopupOpen(false);
          setSubmitStatus(null);
          setFormData({
            email: '',
            issue: '',
            name: '',
            contactNumber: '',
            urgency: 'normal'
          });
        }, 2000);
      } else {
        throw new Error(result.message || 'Failed to submit');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
      }}>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="group"
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #dc2626, #991b1b)',
            border: '2px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(220,38,38,0.4)',
            transition: 'transform 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          aria-label="Contact Us"
        >
          {/* Pulse animation ring */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: '#dc2626',
            opacity: 0.75,
            animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
            pointerEvents: 'none',
          }} />
          
          {/* Button icon */}
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          animation: 'fadeIn 0.3s ease-out',
        }}>
          <div style={{
            backgroundColor: '#0f0f0f',
            backgroundImage: 'linear-gradient(to bottom right, #1a1a1a, #0a0a0a)',
            borderRadius: '12px',
            border: '1px solid rgba(220,38,38,0.3)',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            animation: 'slideUp 0.4s ease-out',
          }}>
            {/* Close button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: '#999',
                cursor: 'pointer',
                fontSize: '28px',
                zIndex: 1,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#dc2626'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
            >
              ×
            </button>

            {/* Header */}
            <div style={{ 
              textAlign: 'center', 
              padding: '32px 24px 24px', 
              borderBottom: '1px solid rgba(220,38,38,0.2)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(220,38,38,0.1)',
                marginBottom: '16px',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h2 style={{ 
                color: 'white', 
                fontSize: '24px', 
                marginBottom: '8px', 
                fontFamily: 'monospace',
                fontWeight: 'bold'
              }}>
                Enquire Now
              </h2>
              <p style={{ color: '#60a5fa', fontSize: '14px', fontFamily: 'monospace' }}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  Name <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(220,38,38,0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(220,38,38,0.3)'}
                  placeholder="John Doe"
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  Email Address <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(220,38,38,0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(220,38,38,0.3)'}
                  placeholder="john@example.com"
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(220,38,38,0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#dc2626'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(220,38,38,0.3)'}
                  placeholder="+91 12345 67890"
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  Urgency Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(220,38,38,0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  <option value="normal">Normal - Reply within 2-3 days</option>
                  <option value="urgent">Urgent - Reply within 24 hours</option>
                  <option value="critical">Critical - Reply as soon as possible</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white', 
                  fontSize: '14px', 
                  marginBottom: '8px',
                  fontFamily: 'monospace'
                }}>
                  Issue / Problem <span style={{ color: '#dc2626' }}>*</span>
                </label>
                <textarea
                  name="issue"
                  value={formData.issue}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(220,38,38,0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '14px',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  placeholder="Please describe your issue or question in detail..."
                />
              </div>

              {submitStatus === 'success' && (
                <div style={{
                  backgroundColor: 'rgba(34,197,94,0.2)',
                  border: '1px solid #22c55e',
                  borderRadius: '6px',
                  padding: '12px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  <p style={{ color: '#22c55e', fontSize: '14px' }}>✓ Enquiry sent successfully! We'll contact you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{
                  backgroundColor: 'rgba(239,68,68,0.2)',
                  border: '1px solid #ef4444',
                  borderRadius: '6px',
                  padding: '12px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}>
                  <p style={{ color: '#ef4444', fontSize: '14px' }}>✗ Failed to send enquiry. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  fontFamily: 'monospace',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.5 : 1,
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>

              <p style={{ 
                textAlign: 'center', 
                fontSize: '11px', 
                color: '#60a5fa', 
                marginTop: '16px',
                fontFamily: 'monospace'
              }}>
                We respect your privacy. Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingContactButton;