import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP02 — 사용률이 낮거나 없는 워크로드 컴포넌트 제거 또는 리팩터링</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        사용되지 않는 컴포넌트를 제거하고 활용률이 낮은 컴포넌트를 리팩터링하여 워크로드의 낭비를
        최소화합니다. 클라우드 워크로드에서 사용되지 않거나 활용률이 낮은 컴포넌트는 불필요한
        컴퓨팅, 스토리지 또는 네트워크 리소스를 소비합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        유휴 컴포넌트를 직접 제거하여 낭비를 줄이고 클라우드 워크로드의 전반적인 효율성을 개선합니다.
        가장 적은 클라우드 리소스로 비즈니스 요구사항을 충족하고 리소스 활용을 지속적으로 최적화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드 개별 컴포넌트의 활용률을 정기적으로 확인하지 않는 경우</li>
        <li>AWS Compute Optimizer 등 AWS 적정 규모 도구의 권장 사항을 확인·분석하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>낭비 최소화 및 클라우드 워크로드 전반적인 효율성 개선</li>
        <li>불필요한 리소스 소비 감소</li>
        <li>수요 변화에 맞춘 반복적 개선 프로세스 지원</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Resource Explorer를 사용하여 AWS 리소스를 인벤토리하고 구성합니다.</li>
        <li>CloudWatch로 CPU, 메모리, 네트워크 처리량 등 지표를 캡처하여 활용률을 모니터링합니다.</li>
        <li>안정적인 워크로드에 AWS Compute Optimizer를 사용하여 미사용 컴포넌트를 식별합니다.</li>
        <li>미사용 컴포넌트(ECR 이미지, EBS 볼륨 등)를 제거합니다.</li>
        <li>활용률이 낮은 컴포넌트를 다른 리소스와 통합하여 리팩터링합니다(예: 여러 데이터베이스를 단일 RDS 인스턴스로 통합).</li>
        <li>지속 가능성 프록시 지표를 사용하여 효율성 향상을 측정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer — 적정 규모 권장 사항</li>
        <li>AWS Resource Explorer — 리소스 인벤토리 및 구성</li>
        <li>Amazon CloudWatch — 리소스 활용률 지표 모니터링</li>
        <li>AWS Trusted Advisor — 저활용 리소스 식별</li>
        <li>AWS Config — 리소스 구성 평가</li>
        <li>AWS Systems Manager — 운영 데이터 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
