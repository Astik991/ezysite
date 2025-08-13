import nodemailer from 'nodemailer';

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email templates
const generateContactLeadEmail = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sourceUrl?: string;
}) => {
  return {
    subject: `New Contact Lead: ${formData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Contact Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #333;">Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d;"><strong>Action Required:</strong> Please respond to this lead within 2 hours.</p>
        </div>
        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website contact form.</p>
      </div>
    `,
    text: `
New Contact Lead: ${formData.subject}

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Subject: ${formData.subject}

Message:
${formData.message}

Action Required: Please respond to this lead within 2 hours.

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

---
This email was automatically generated from the EzyHelpers website contact form.
    `,
  };
};

const generateHireHelperLeadEmail = (formData: {
  name: string;
  phone: string;
  email: string;
  city: string;
  serviceType: string;
  duration: string;
  startDate: string;
  specificRequirements: string;
  experience: string;
  budget: string;
  languages: string[];
  additionalServices: string[];
  familySize: string;
  preferredGender: string;
  requestId: string;
  sourceUrl?: string;
}) => {
  return {
    subject: `New Hire Helper Lead: ${formData.serviceType} in ${formData.city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Hire Helper Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Request ID: ${formData.requestId}</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          <p><strong>City:</strong> ${formData.city}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Service Requirements</h3>
          <p><strong>Service Type:</strong> ${formData.serviceType}</p>
          <p><strong>Duration:</strong> ${formData.duration}</p>
          <p><strong>Start Date:</strong> ${formData.startDate}</p>
          <p><strong>Experience Required:</strong> ${formData.experience}</p>
          <p><strong>Budget Range:</strong> ${formData.budget}</p>
          <p><strong>Family Size:</strong> ${formData.familySize}</p>
          <p><strong>Preferred Gender:</strong> ${formData.preferredGender}</p>
          <p><strong>Languages:</strong> ${formData.languages.join(', ')}</p>
          <p><strong>Additional Services:</strong> ${formData.additionalServices.join(', ') || 'None'}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Specific Requirements</h3>
          <p style="white-space: pre-wrap;">${formData.specificRequirements || 'No specific requirements mentioned.'}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px;">
          <p style="margin: 0; color: #856404;"><strong>Priority:</strong> High priority lead - immediate follow-up required.</p>
        </div>
        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website hire helper form.</p>
      </div>
    `,
    text: `
New Hire Helper Lead: ${formData.serviceType} in ${formData.city}

Request ID: ${formData.requestId}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- City: ${formData.city}

Service Requirements:
- Service Type: ${formData.serviceType}
- Duration: ${formData.duration}
- Start Date: ${formData.startDate}
- Experience Required: ${formData.experience}
- Budget Range: ${formData.budget}
- Family Size: ${formData.familySize}
- Preferred Gender: ${formData.preferredGender}
- Languages: ${formData.languages.join(', ')}
- Additional Services: ${formData.additionalServices.join(', ') || 'None'}

Specific Requirements:
${formData.specificRequirements || 'No specific requirements mentioned.'}

Priority: High priority lead - immediate follow-up required.

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

---
This email was automatically generated from the EzyHelpers website hire helper form.
    `,
  };
};

const generateGeneralLeadEmail = (formData: {
  name: string;
  phone: string;
  service: string;
  city: string;
  sourceUrl?: string;
}) => {
  return {
    subject: `New Lead: ${formData.service} in ${formData.city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f1750a;">New Lead Received</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Lead Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>City:</strong> ${formData.city}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #2d5a2d;"><strong>Action Required:</strong> Please call this lead within 30 minutes.</p>
        </div>
        ${formData.sourceUrl ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f8ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Source URL:</strong> <a href="${formData.sourceUrl}" target="_blank" style="color: #1e40af; text-decoration: underline;">${formData.sourceUrl}</a></p>
        </div>
        ` : ''}
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was automatically generated from the EzyHelpers website.</p>
      </div>
    `,
    text: `
New Lead: ${formData.service} in ${formData.city}

Lead Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Service: ${formData.service}
- City: ${formData.city}

Action Required: Please call this lead within 30 minutes.

${formData.sourceUrl ? `Source URL: ${formData.sourceUrl}` : ''}

---
This email was automatically generated from the EzyHelpers website.
    `,
  };
};

const generateAgentRegistrationEmail = (formData: {
  id: string;
  agencyName: string;
  registrationNumber: string;
  yearFounded: number;
  servicesOffered: string[];
  maxHelpersSupply: number;
  ownerName: string;
  ownerDOB: string;
  ownerIDType: string;
  ownerIDNumber: string;
  primaryPhone: string;
  secondaryPhone?: string;
  email: string;
  officeAddressLine1: string;
  officeAddressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  latitude?: number;
  longitude?: number;
  listedBy?: string;
  notes?: string;
}) => {
  return {
    subject: `New Agent Registration: ${formData.agencyName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #0891b2; background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">🤝 New Agent Registration</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Registration ID: ${formData.id}</h3>
          <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Listed By:</strong> ${formData.listedBy || 'Self Registration'}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Agency Information</h3>
          <p><strong>Agency Name:</strong> ${formData.agencyName}</p>
          <p><strong>Registration Number:</strong> ${formData.registrationNumber}</p>
          <p><strong>Year Founded:</strong> ${formData.yearFounded}</p>
          <p><strong>Services Offered:</strong> ${formData.servicesOffered.join(', ')}</p>
          <p><strong>Max Helpers Supply:</strong> ${formData.maxHelpersSupply} helpers per month</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Owner Details</h3>
          <p><strong>Owner Name:</strong> ${formData.ownerName}</p>
          <p><strong>Date of Birth:</strong> ${formData.ownerDOB}</p>
          <p><strong>ID Type:</strong> ${formData.ownerIDType}</p>
          <p><strong>ID Number:</strong> ${formData.ownerIDNumber}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
          <p><strong>Primary Phone:</strong> <a href="tel:${formData.primaryPhone}">${formData.primaryPhone}</a></p>
          ${formData.secondaryPhone ? `<p><strong>Secondary Phone:</strong> <a href="tel:${formData.secondaryPhone}">${formData.secondaryPhone}</a></p>` : ''}
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Office Address</h3>
          <p><strong>Address Line 1:</strong> ${formData.officeAddressLine1}</p>
          ${formData.officeAddressLine2 ? `<p><strong>Address Line 2:</strong> ${formData.officeAddressLine2}</p>` : ''}
          <p><strong>City:</strong> ${formData.city}</p>
          <p><strong>State:</strong> ${formData.state}</p>
          <p><strong>Pincode:</strong> ${formData.pincode}</p>
          ${formData.latitude && formData.longitude ? `<p><strong>Coordinates:</strong> ${formData.latitude}, ${formData.longitude}</p>` : ''}
        </div>

        ${formData.notes ? `
        <div style="background-color: #fffbeb; padding: 20px; border: 1px solid #fbbf24; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #92400e;">Additional Notes</h3>
          <p style="white-space: pre-wrap;">${formData.notes}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #dbeafe; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af;"><strong>Next Steps:</strong></p>
          <ul style="color: #1e40af; margin: 10px 0;">
            <li>Verify agency documents and certificates</li>
            <li>Conduct background verification of owner</li>
            <li>Schedule onboarding call</li>
            <li>Add to partner network if approved</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers Agent Registration system.</p>
      </div>
    `,
    text: `
New Agent Registration: ${formData.agencyName}

Registration ID: ${formData.id}
Registration Date: ${new Date().toLocaleString()}
Listed By: ${formData.listedBy || 'Self Registration'}

AGENCY INFORMATION:
- Agency Name: ${formData.agencyName}
- Registration Number: ${formData.registrationNumber}
- Year Founded: ${formData.yearFounded}
- Services Offered: ${formData.servicesOffered.join(', ')}
- Max Helpers Supply: ${formData.maxHelpersSupply} helpers per month

OWNER DETAILS:
- Owner Name: ${formData.ownerName}
- Date of Birth: ${formData.ownerDOB}
- ID Type: ${formData.ownerIDType}
- ID Number: ${formData.ownerIDNumber}

CONTACT INFORMATION:
- Primary Phone: ${formData.primaryPhone}
${formData.secondaryPhone ? `- Secondary Phone: ${formData.secondaryPhone}` : ''}
- Email: ${formData.email}

OFFICE ADDRESS:
- Address Line 1: ${formData.officeAddressLine1}
${formData.officeAddressLine2 ? `- Address Line 2: ${formData.officeAddressLine2}` : ''}
- City: ${formData.city}
- State: ${formData.state}
- Pincode: ${formData.pincode}
${formData.latitude && formData.longitude ? `- Coordinates: ${formData.latitude}, ${formData.longitude}` : ''}

${formData.notes ? `ADDITIONAL NOTES:\n${formData.notes}` : ''}

NEXT STEPS:
- Verify agency documents and certificates
- Conduct background verification of owner
- Schedule onboarding call
- Add to partner network if approved

---
This email was automatically generated from the EzyHelpers Agent Registration system.
    `,
  };
};

const generateHelperRegistrationEmail = (formData: {
  id: string;
  helperType: string;
  firstName: string;
  lastName?: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  nativeState: string;
  currentLocality: string;
  languagesKnown: string[];
  educationLevel: string;
  maritalStatus: string;
  spouseOccupation?: string;
  kidsCount: number;
  smartphoneAvailable: boolean;
  whatsappActive: boolean;
  vaccinationStatus: string;
  experienceMonths: number;
  specialities: string[];
  workingHoursPreference: string;
  preferredLocalities?: string;
  maxPlacementsPerMonth: number;
  expectedSalaryMin: number;
  expectedSalaryMax: number;
  idProofType: string;
  idProofNumber: string;
  bankName?: string;
  bankIFSC?: string;
  accountHolderName?: string;
  accountNumber?: string;
  primaryPhone: string;
  alternatePhone?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  latitude?: number;
  longitude?: number;
  listedBy?: string;
  internalNotes?: string;
}) => {
  return {
    subject: `New Helper Registration: ${formData.firstName} ${formData.lastName || ''} - ${formData.helperType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #2563eb; background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 0 0 20px 0;">👥 New Helper Registration</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #334155;">Registration ID: ${formData.id}</h3>
          <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Listed By:</strong> ${formData.listedBy || 'Self Registration'}</p>
          <p><strong>Helper Type:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${formData.helperType}</span></p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Personal Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName || ''}</p>
          <p><strong>Gender:</strong> ${formData.gender}</p>
          <p><strong>Date of Birth:</strong> ${formData.dateOfBirth} (Age: ${formData.age} years)</p>
          <p><strong>Native State:</strong> ${formData.nativeState}</p>
          <p><strong>Current Locality:</strong> ${formData.currentLocality}</p>
          <p><strong>Languages Known:</strong> ${formData.languagesKnown.join(', ')}</p>
          <p><strong>Education Level:</strong> ${formData.educationLevel}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Family & Personal Details</h3>
          <p><strong>Marital Status:</strong> ${formData.maritalStatus}</p>
          ${formData.spouseOccupation ? `<p><strong>Spouse Occupation:</strong> ${formData.spouseOccupation}</p>` : ''}
          <p><strong>Number of Kids:</strong> ${formData.kidsCount}</p>
          <p><strong>Smartphone Available:</strong> ${formData.smartphoneAvailable ? 'Yes' : 'No'}</p>
          <p><strong>WhatsApp Active:</strong> ${formData.whatsappActive ? 'Yes' : 'No'}</p>
          <p><strong>Vaccination Status:</strong> ${formData.vaccinationStatus}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Work Experience & Skills</h3>
          <p><strong>Experience:</strong> ${formData.experienceMonths} months</p>
          <p><strong>Specialities:</strong> ${formData.specialities.join(', ')}</p>
          <p><strong>Working Hours Preference:</strong> ${formData.workingHoursPreference}</p>
          ${formData.preferredLocalities ? `<p><strong>Preferred Localities:</strong> ${formData.preferredLocalities}</p>` : ''}
          <p><strong>Max Placements Per Month:</strong> ${formData.maxPlacementsPerMonth}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Salary Expectations</h3>
          <p><strong>Expected Salary Range:</strong> ₹${formData.expectedSalaryMin} - ₹${formData.expectedSalaryMax} per month</p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Identity Verification</h3>
          <p><strong>ID Proof Type:</strong> ${formData.idProofType}</p>
          <p><strong>ID Proof Number:</strong> ${formData.idProofNumber}</p>
        </div>

        ${formData.bankName || formData.accountNumber ? `
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Banking Details</h3>
          ${formData.bankName ? `<p><strong>Bank Name:</strong> ${formData.bankName}</p>` : ''}
          ${formData.bankIFSC ? `<p><strong>IFSC Code:</strong> ${formData.bankIFSC}</p>` : ''}
          ${formData.accountHolderName ? `<p><strong>Account Holder Name:</strong> ${formData.accountHolderName}</p>` : ''}
          ${formData.accountNumber ? `<p><strong>Account Number:</strong> ${formData.accountNumber}</p>` : ''}
        </div>
        ` : ''}

        <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
          <p><strong>Primary Phone:</strong> <a href="tel:${formData.primaryPhone}">${formData.primaryPhone}</a></p>
          ${formData.alternatePhone ? `<p><strong>Alternate Phone:</strong> <a href="tel:${formData.alternatePhone}">${formData.alternatePhone}</a></p>` : ''}
          ${formData.emergencyContactName ? `<p><strong>Emergency Contact:</strong> ${formData.emergencyContactName}</p>` : ''}
          ${formData.emergencyContactPhone ? `<p><strong>Emergency Contact Phone:</strong> <a href="tel:${formData.emergencyContactPhone}">${formData.emergencyContactPhone}</a></p>` : ''}
          ${formData.latitude && formData.longitude ? `<p><strong>Location Coordinates:</strong> ${formData.latitude}, ${formData.longitude}</p>` : ''}
        </div>

        ${formData.internalNotes ? `
        <div style="background-color: #fffbeb; padding: 20px; border: 1px solid #fbbf24; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #92400e;">Internal Notes</h3>
          <p style="white-space: pre-wrap;">${formData.internalNotes}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #ecfdf5; border-radius: 8px;">
          <p style="margin: 0; color: #065f46;"><strong>Next Steps:</strong></p>
          <ul style="color: #065f46; margin: 10px 0;">
            <li>Verify identity documents and background</li>
            <li>Conduct skill assessment interview</li>
            <li>Check references and previous work history</li>
            <li>Schedule orientation and training</li>
            <li>Add to active helper database if approved</li>
          </ul>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">This email was automatically generated from the EzyHelpers Helper Registration system.</p>
      </div>
    `,
    text: `
New Helper Registration: ${formData.firstName} ${formData.lastName || ''} - ${formData.helperType}

Registration ID: ${formData.id}
Registration Date: ${new Date().toLocaleString()}
Listed By: ${formData.listedBy || 'Self Registration'}
Helper Type: ${formData.helperType}

PERSONAL INFORMATION:
- Name: ${formData.firstName} ${formData.lastName || ''}
- Gender: ${formData.gender}
- Date of Birth: ${formData.dateOfBirth} (Age: ${formData.age} years)
- Native State: ${formData.nativeState}
- Current Locality: ${formData.currentLocality}
- Languages Known: ${formData.languagesKnown.join(', ')}
- Education Level: ${formData.educationLevel}

FAMILY & PERSONAL DETAILS:
- Marital Status: ${formData.maritalStatus}
${formData.spouseOccupation ? `- Spouse Occupation: ${formData.spouseOccupation}` : ''}
- Number of Kids: ${formData.kidsCount}
- Smartphone Available: ${formData.smartphoneAvailable ? 'Yes' : 'No'}
- WhatsApp Active: ${formData.whatsappActive ? 'Yes' : 'No'}
- Vaccination Status: ${formData.vaccinationStatus}

WORK EXPERIENCE & SKILLS:
- Experience: ${formData.experienceMonths} months
- Specialities: ${formData.specialities.join(', ')}
- Working Hours Preference: ${formData.workingHoursPreference}
${formData.preferredLocalities ? `- Preferred Localities: ${formData.preferredLocalities}` : ''}
- Max Placements Per Month: ${formData.maxPlacementsPerMonth}

SALARY EXPECTATIONS:
- Expected Salary Range: ₹${formData.expectedSalaryMin} - ₹${formData.expectedSalaryMax} per month

IDENTITY VERIFICATION:
- ID Proof Type: ${formData.idProofType}
- ID Proof Number: ${formData.idProofNumber}

${formData.bankName || formData.accountNumber ? `BANKING DETAILS:
${formData.bankName ? `- Bank Name: ${formData.bankName}` : ''}
${formData.bankIFSC ? `- IFSC Code: ${formData.bankIFSC}` : ''}
${formData.accountHolderName ? `- Account Holder Name: ${formData.accountHolderName}` : ''}
${formData.accountNumber ? `- Account Number: ${formData.accountNumber}` : ''}
` : ''}

CONTACT INFORMATION:
- Primary Phone: ${formData.primaryPhone}
${formData.alternatePhone ? `- Alternate Phone: ${formData.alternatePhone}` : ''}
${formData.emergencyContactName ? `- Emergency Contact: ${formData.emergencyContactName}` : ''}
${formData.emergencyContactPhone ? `- Emergency Contact Phone: ${formData.emergencyContactPhone}` : ''}
${formData.latitude && formData.longitude ? `- Location Coordinates: ${formData.latitude}, ${formData.longitude}` : ''}

${formData.internalNotes ? `INTERNAL NOTES:\n${formData.internalNotes}` : ''}

NEXT STEPS:
- Verify identity documents and background
- Conduct skill assessment interview
- Check references and previous work history
- Schedule orientation and training
- Add to active helper database if approved

---
This email was automatically generated from the EzyHelpers Helper Registration system.
    `,
  };
};

// Main email sending function
export const sendLeadEmail = async (
  leadType: 'contact' | 'hire_helper' | 'general' | 'agent_registration' | 'helper_registration',
  formData: any,
  requestId?: string,
  sourceUrl?: string
) => {
  try {
    // Use contact@ezyhelpers.com for registration emails or fallback to ADMIN_EMAIL for other types
    // Get the primary admin email based on lead type
    const primaryEmail = (leadType === 'agent_registration' || leadType === 'helper_registration') 
      ? 'contact@ezyhelpers.com' 
      : process.env.ADMIN_EMAIL;
      
    // Create array of recipients including Ashma's email
    const adminEmail = [primaryEmail, 'ashma@ezyhelpers.com'].filter(Boolean).join(', ');
      
    if (!adminEmail) {
      console.error('ADMIN_EMAIL environment variable not set');
      return { success: false, error: 'Admin email not configured' };
    }

    const transporter = createTransporter();
    
    let emailContent;
    
    switch (leadType) {
      case 'contact':
        emailContent = generateContactLeadEmail({ ...formData, sourceUrl });
        break;
      case 'hire_helper':
        emailContent = generateHireHelperLeadEmail({ ...formData, requestId: requestId || 'N/A', sourceUrl });
        break;
      case 'general':
        emailContent = generateGeneralLeadEmail({ ...formData, sourceUrl });
        break;
      case 'agent_registration':
        emailContent = generateAgentRegistrationEmail(formData);
        break;
      case 'helper_registration':
        emailContent = generateHelperRegistrationEmail(formData);
        break;
      default:
        throw new Error('Invalid lead type');
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: adminEmail,
      replyTo: formData.email || process.env.SMTP_USER,
      ...emailContent,
    };

    const result = await transporter.sendMail(mailOptions);
    
    console.log('Lead email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('Error sending lead email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Test email function
export const testEmailConnection = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { success: true, message: 'Email connection verified successfully' };
  } catch (error) {
    console.error('Email connection test failed:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}; 