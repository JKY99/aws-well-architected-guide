import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP01 — 서비스 할당량 및 제약 사항 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 시스템 안정성과 가용성에 상당한 위험이 노출됩니다.</p>
      </div>
      <p>
        워크로드 아키텍처에 대한 기본 할당량을 파악하고 할당량 증가 요청을 관리하십시오.
        디스크 또는 네트워크 대역폭과 같은 클라우드 리소스 제약 사항 중 잠재적으로 영향을 미칠 수 있는 사항도 파악하십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        서비스 할당량 및 제약 사항에 대한 적절한 지침을 구현하여 서비스 저하 또는 중단을 방지합니다.
        모니터링, 인프라 검토, 자동화된 수정 단계를 통해 할당량과 제약 사항에 도달하지 않도록 검증합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>하드 또는 소프트 할당량과 해당 한도를 이해하지 못한 채 워크로드를 배포</li>
        <li>사전에 할당량을 분석 및 재구성하지 않고 대체 워크로드를 배포</li>
        <li>클라우드 서비스가 속도, 한도, 수량에 대한 제한 없이 사용 가능하다고 가정</li>
        <li>할당량이 자동으로 증가한다고 가정하거나 할당량 요청 프로세스와 소요 시간을 모름</li>
        <li>기본 할당량이 모든 리전에서 동일하다고 가정</li>
        <li>애플리케이션을 피크 트래픽 수준에서 테스트하지 않아 리소스 사용률을 파악하지 못함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>서비스 할당량과 제약 사항의 모니터링 및 자동화된 관리를 통한 사전 장애 감소</li>
        <li>예기치 않거나 계획되지 않은 이벤트 발생 시 복원력 향상</li>
        <li>트래픽 패턴 변화로 인한 서비스 중단 방지</li>
        <li>모든 리전 및 계정에 걸친 더 나은 용량 계획</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Service Quotas 콘솔에서 250개 이상의 AWS 서비스에 대한 할당량 값을 조회, 요청 및 추적</li>
        <li>AWS Trusted Advisor의 서비스 할당량 확인을 사용하여 사용량 및 한도 파악</li>
        <li>AWS Config를 사용하여 계정에서 사용 중인 모든 AWS 리소스 확인</li>
        <li>AWS CloudFormation의 list-stack-resources 명령을 사용하여 배포된 리소스 확인</li>
        <li>할당량에 근접하면 알림을 보내는 자동화된 모니터링 구현</li>
        <li>리전 간 일관된 할당량 구성을 검증하는 자동화된 점검 생성</li>
        <li>새 서비스를 프로덕션 배포 전 서비스 할당량 검토</li>
        <li>리소스 제약 사항에 대한 모니터링 및 지표를 설정하고 의미 있는 임계값 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>AWS Trusted Advisor</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Config</li>
        <li>AWS CloudFormation</li>
        <li>Amazon DevOps Guru</li>
        <li>Quota Monitor for AWS 솔루션</li>
      </ul>
      <PageNav />
    </article>
  );
}
