import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP05 — 패치 관리 수행</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        패치 관리는 기능 확보, 문제 해결, 거버넌스 규정 준수 유지에 필수적입니다.
        패치 관리를 자동화하면 수동 오류가 줄고, 확장성이 향상되며, 검증된 알려진 정상 상태로
        배포된 불변 인프라를 선호하면서 노력이 최소화됩니다.
      </p>

      <h2>원하는 결과</h2>
      <ul>
        <li>환경 전반의 패치 수준에 대한 확장성과 보고.</li>
        <li>배포된 수정 사항에 대한 명확한 가시성으로 보안 보증.</li>
        <li>자동화를 통한 노력 감소로 수동 오류 최소화.</li>
        <li>기능 채택 및 신속한 문제 해결.</li>
        <li>거버넌스 및 공급업체 요구 사항과의 규정 준수 유지.</li>
      </ul>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>애플리케이션 비호환성으로 중단을 유발하며 2시간 이내에 모든 보안 패치를 적용하는 경우</li>
        <li>알려진 취약점을 통한 무단 액세스를 허용하며 라이브러리를 패치하지 않고 방치하는 경우</li>
        <li>알림 없이 개발자 환경을 자동으로 패치하여 개발자 워크플로를 중단하는 경우</li>
        <li>상용 기성 소프트웨어를 패치하지 않아 공급업체 지원을 잃는 경우</li>
        <li>성능 향상 패치를 놓쳐 시스템을 최적이지 않은 상태로 유지하는 경우</li>
        <li>제로데이 긴급 상황 시 모든 환경의 수동 패치가 필요한 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>환경 전반의 패치 수준에 대한 확장성과 보고를 제공합니다.</li>
        <li>배포된 수정 사항에 대한 명확한 가시성으로 보안 보증을 제공합니다.</li>
        <li>자동화를 통해 노력을 줄이고 수동 오류를 최소화합니다.</li>
        <li>기능 채택을 가능하게 하고 문제를 신속하게 해결합니다.</li>
        <li>거버넌스 및 공급업체 요구 사항과의 규정 준수를 유지합니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EC2 Image Builder: 파이프라인 세부 사항을 지정하고, 레시피를 선택하며(이미지 유형, 기반 이미지, 빌드 구성 요소 정의), 인프라 구성을 정의하고 정기적으로 레시피 유지 관리를 수행합니다.</li>
        <li>AWS Systems Manager Patch Manager: 패치 기준선을 생성하고, 패치 작업 방법을 선택하며, 규정 준수 보고 및 스캔을 활성화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Health — 수명 주기 이벤트 및 조치 필요 알림의 권위 있는 소스</li>
        <li>Amazon EC2 Image Builder — 자동화된 AMI 및 컨테이너 이미지 패치 파이프라인</li>
        <li>AWS Systems Manager Patch Manager — 관리형 시스템의 패치 자동화</li>
        <li>Systems Manager Maintenance Windows — 패치 배포 활동 스케줄링</li>
        <li>Amazon ECR / ECS / EKS — 컨테이너화된 이미지 업데이트 관리</li>
        <li>AWS Lambda — 서버리스 함수를 위한 버전 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
