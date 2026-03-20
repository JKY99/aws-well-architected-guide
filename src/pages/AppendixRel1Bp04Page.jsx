import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP04 — 할당량 모니터링 및 관리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        잠재적 사용량을 평가하고 계획된 사용량 증가에 맞게 할당량을 적절히 늘리십시오.
        능동적이고 자동화된 시스템을 배포하여 할당량 사용 임계값을 관리 및 모니터링하고,
        할당량 변경 요청을 통해 사전에 문제를 해결하십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        능동적이고 자동화된 시스템이 할당량을 관리하고 모니터링하도록 배포되어 있습니다.
        운영 솔루션이 할당량 사용 임계값이 도달하기 전에 식별하고, 할당량 변경 요청을 통해 사전에 문제를 수정합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>서비스 할당량 임계값에 대한 모니터링을 구성하지 않음</li>
        <li>변경 불가능하더라도 하드 한도 무시</li>
        <li>할당량 변경 요청이 즉각적이거나 빠르다고 가정</li>
        <li>응답 프로세스 없이 경보만 설정</li>
        <li>AWS Service Quotas가 지원하는 서비스만 모니터링</li>
        <li>다중 리전 복원력 설계에 대한 할당량 관리 무시</li>
        <li>리전 간 할당량 차이 평가하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AWS Service Quotas 및 사용량 모니터링의 자동 추적</li>
        <li>할당량 한도에 근접할 때 조기에 가시성 확보</li>
        <li>모니터링 데이터를 통해 할당량 고갈로 인한 저하 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 API(예: EC2 DescribeInstances)를 사용하여 현재 리소스 소비량 캡처</li>
        <li>AWS Service Quotas, AWS Trusted Advisor, AWS CLI/CDK를 사용하여 현재 할당량 캡처</li>
        <li>AWS Config 사용자 지정 규칙 또는 Lambda 함수를 사용하여 리전 간 할당량 스캔 및 비교 자동화</li>
        <li>차이가 확인된 경우 할당량 변경 요청</li>
        <li>모든 요청 결과 검토</li>
        <li>임계값을 낮추어 비프로덕션 계정에서 자동화 테스트</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>AWS Trusted Advisor</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Config</li>
        <li>AWS Lambda</li>
        <li>Amazon EventBridge</li>
        <li>Amazon DevOps Guru</li>
      </ul>
      <PageNav />
    </article>
  );
}
