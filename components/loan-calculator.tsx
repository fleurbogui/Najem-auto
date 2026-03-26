// 'use client'

// import { useState } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
// import { Label } from '../components/ui/label'
// import { Input } from '../components/ui/input'
// import { Slider } from '../components/ui/slider'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
// import { useLocale } from '../components/locale-provider'

// interface LoanCalculatorProps {
//   vehiclePrice: number
// }

// export function LoanCalculator({ vehiclePrice }: LoanCalculatorProps) {
//   const { t } = useLocale()
//   const [downPayment, setDownPayment] = useState(vehiclePrice * 0.2)
//   const [loanTerm, setLoanTerm] = useState(60)
//   const [interestRate, setInterestRate] = useState(5.9)
//   const [tradeInValue, setTradeInValue] = useState(0)

//   const [leaseDownPayment, setLeaseDownPayment] = useState(vehiclePrice * 0.1)
//   const [leaseTerm, setLeaseTerm] = useState(36)
//   const [leaseRate, setLeaseRate] = useState(3.9)
//   const [annualMileage, setAnnualMileage] = useState(12000)

//   // Loan calculations
//   const loanAmount = vehiclePrice - downPayment - tradeInValue
//   const monthlyRate = interestRate / 100 / 12
//   const numPayments = loanTerm
//   const monthlyPayment =
//     loanAmount > 0
//       ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
//         (Math.pow(1 + monthlyRate, numPayments) - 1)
//       : 0
//   const totalLoanCost = monthlyPayment * numPayments + downPayment + tradeInValue
//   const totalLoanInterest = totalLoanCost - vehiclePrice

//   // Lease calculations
//   const residualValue = vehiclePrice * 0.5
//   const leaseAmount = vehiclePrice - leaseDownPayment - residualValue
//   const leaseMonthlyRate = leaseRate / 100 / 12
//   const monthlyLeasePayment =
//     (leaseAmount / leaseTerm) + ((vehiclePrice + residualValue) * leaseMonthlyRate)
//   const totalLeaseCost = monthlyLeasePayment * leaseTerm + leaseDownPayment

//   return (
//     <Tabs defaultValue="loan" className="w-full">
//       <TabsList className="grid w-full grid-cols-2">
//         <TabsTrigger value="loan">{t('loanCalculator')}</TabsTrigger>
//         <TabsTrigger value="lease">{t('leaseCalculator')}</TabsTrigger>
//       </TabsList>

//       <TabsContent value="loan" className="space-y-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>{t('loanCalculator')}</CardTitle>
//             <CardDescription>{t('calculateMonthlyPayment')}</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="space-y-2">
//               <Label>{t('vehiclePrice')}</Label>
//               <div className="text-3xl font-bold">${vehiclePrice.toLocaleString()}</div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('downPayment')}</Label>
//                 <span className="text-sm font-medium">${downPayment.toLocaleString()}</span>
//               </div>
//               <Slider
//                 value={[downPayment]}
//                 onValueChange={(value) => setDownPayment(value[0])}
//                 min={0}
//                 max={vehiclePrice * 0.5}
//                 step={1000}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>$0</span>
//                 <span>{((downPayment / vehiclePrice) * 100).toFixed(0)}%</span>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label>{t('tradeInValue')}</Label>
//               <Input
//                 type="number"
//                 value={tradeInValue}
//                 onChange={(e) => setTradeInValue(Number(e.target.value))}
//                 min={0}
//               />
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('loanTerm')}</Label>
//                 <span className="text-sm font-medium">{loanTerm} {t('months')}</span>
//               </div>
//               <Slider
//                 value={[loanTerm]}
//                 onValueChange={(value) => setLoanTerm(value[0])}
//                 min={12}
//                 max={84}
//                 step={12}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>12 {t('months')}</span>
//                 <span>84 {t('months')}</span>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('interestRate')}</Label>
//                 <span className="text-sm font-medium">{interestRate.toFixed(1)}%</span>
//               </div>
//               <Slider
//                 value={[interestRate]}
//                 onValueChange={(value) => setInterestRate(value[0])}
//                 min={0}
//                 max={15}
//                 step={0.1}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>0%</span>
//                 <span>15%</span>
//               </div>
//             </div>

//             <div className="border-t pt-6 space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">{t('loanAmount')}</span>
//                 <span className="font-medium">${loanAmount.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">{t('totalInterest')}</span>
//                 <span className="font-medium">${totalLoanInterest.toFixed(0).toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">{t('totalCost')}</span>
//                 <span className="font-medium">${totalLoanCost.toFixed(0).toLocaleString()}</span>
//               </div>
//               <div className="bg-primary/10 p-4 rounded-lg">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">{t('estimatedMonthlyPayment')}</span>
//                   <span className="text-2xl font-bold">${monthlyPayment.toFixed(0)}</span>
//                 </div>
//                 <p className="text-xs text-muted-foreground mt-1">{t('perMonth')}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </TabsContent>

//       <TabsContent value="lease" className="space-y-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>{t('leaseCalculator')}</CardTitle>
//             <CardDescription>{t('calculateLeasePayment')}</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="space-y-2">
//               <Label>{t('vehiclePrice')}</Label>
//               <div className="text-3xl font-bold">${vehiclePrice.toLocaleString()}</div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('downPayment')}</Label>
//                 <span className="text-sm font-medium">${leaseDownPayment.toLocaleString()}</span>
//               </div>
//               <Slider
//                 value={[leaseDownPayment]}
//                 onValueChange={(value) => setLeaseDownPayment(value[0])}
//                 min={0}
//                 max={vehiclePrice * 0.3}
//                 step={500}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>$0</span>
//                 <span>{((leaseDownPayment / vehiclePrice) * 100).toFixed(0)}%</span>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('leaseTerm')}</Label>
//                 <span className="text-sm font-medium">{leaseTerm} {t('months')}</span>
//               </div>
//               <Slider
//                 value={[leaseTerm]}
//                 onValueChange={(value) => setLeaseTerm(value[0])}
//                 min={24}
//                 max={48}
//                 step={12}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>24 {t('months')}</span>
//                 <span>48 {t('months')}</span>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('interestRate')}</Label>
//                 <span className="text-sm font-medium">{leaseRate.toFixed(1)}%</span>
//               </div>
//               <Slider
//                 value={[leaseRate]}
//                 onValueChange={(value) => setLeaseRate(value[0])}
//                 min={0}
//                 max={10}
//                 step={0.1}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>0%</span>
//                 <span>10%</span>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <Label>{t('annualMileage')}</Label>
//                 <span className="text-sm font-medium">{annualMileage.toLocaleString()} mi/yr</span>
//               </div>
//               <Slider
//                 value={[annualMileage]}
//                 onValueChange={(value) => setAnnualMileage(value[0])}
//                 min={5000}
//                 max={20000}
//                 step={1000}
//               />
//               <div className="flex justify-between text-xs text-muted-foreground">
//                 <span>5,000</span>
//                 <span>20,000</span>
//               </div>
//             </div>

//             <div className="border-t pt-6 space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">{t('residualValue')}</span>
//                 <span className="font-medium">${residualValue.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm text-muted-foreground">{t('totalLeaseCost')}</span>
//                 <span className="font-medium">${totalLeaseCost.toFixed(0).toLocaleString()}</span>
//               </div>
//               <div className="bg-primary/10 p-4 rounded-lg">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">{t('estimatedMonthlyPayment')}</span>
//                   <span className="text-2xl font-bold">${monthlyLeasePayment.toFixed(0)}</span>
//                 </div>
//                 <p className="text-xs text-muted-foreground mt-1">{t('perMonth')}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   )
// }
