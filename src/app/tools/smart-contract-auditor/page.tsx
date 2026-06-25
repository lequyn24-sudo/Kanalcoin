import React from 'react';
import ProPaywall from '@/components/ProPaywall';

export default function SmartContractAuditor() {
  return (
    <ProPaywall 
      toolName="Smart Contract Auditor"
      description="Automated vulnerability scanning for Solidity smart contracts using advanced static analysis, symbolic execution, and AI pattern recognition."
      icon="🛡️"
      features={[
        "Detect Reentrancy, Flashloan attacks, and 100+ vulnerabilities",
        "Line-by-line code explanation and fix recommendations",
        "Generate professional PDF audit reports",
        "GitHub integration for continuous security CI/CD"
      ]}
    />
  );
}
